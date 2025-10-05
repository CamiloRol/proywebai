from fastapi import APIRouter, HTTPException
from schemas.ask import AskRequest
from routers.faq import check_faq
from db import supabase
from openai import OpenAI
import os

router = APIRouter(prefix="/ask", tags=["Ask"])

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("No se encontró la variable OPENAI_API_KEY en el entorno")
client = OpenAI(api_key=OPENAI_API_KEY)


def save_faq(question: str, answer: str):
    """Guardar nueva FAQ automáticamente"""
    try:
        supabase.table("faq").insert({
            "question": question.strip(),
            "answer": answer.strip()
        }).execute()
    except Exception as e:
        print("Error guardando FAQ:", e)

def classify_topic(question: str) -> str:
    """Clasificar la pregunta en un tema conocido"""
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Clasifica la pregunta en uno de los siguientes temas: disney_plus, energia, violencia, temblores, otro."},
                {"role": "user", "content": question}
            ],
            temperature=0
        )
        return response.choices[0].message.content.strip().lower()
    except Exception as e:
        print("Error clasificando pregunta:", e)
        return "otro"


def get_rag_chunks(question: str, limit: int = 5, file_filter: str = None):
    """Traer chunks desde la tabla chunks"""
    try:
        embedding = client.embeddings.create(
            model="text-embedding-3-small",
            input=question
        ).data[0].embedding

        params = {
            "query_embedding": embedding,
            "match_count": limit
        }

        if file_filter:
            params["file_filter"] = file_filter

        resp = supabase.rpc(
            "match_chunks",
            params
        ).execute()

        if not resp.data:
            print("⚠️ No se encontraron chunks relacionados")
            return []

        print(f"✅ Chunks recuperados con filtro {file_filter}:", resp.data[:2])

        return [c["content"] for c in resp.data]
    except Exception as e:
        print("Error consultando chunks:", e)
        return []
    

@router.post("/")
def ask(request: AskRequest):
    question = request.question.strip()

    faq_answer = check_faq(question)
    if faq_answer:
        return {"answer": faq_answer, "source": "faq"}

    rag_chunks = get_rag_chunks(question, file_filter="disney_plus_shows.csv")

    if not rag_chunks:
        return {"answer": "No encontré información en la base de conocimiento.", "source": "none"}

    context = "\n\n".join(rag_chunks)

    prompt = f"""
    Responde usando únicamente el siguiente contexto.
    Si no hay datos relevantes da una respuesta relacional o que puedas interpretar dentro de los lineamientos de la información que se tiene

    ❓ Pregunta: {question}

    📚 Contexto:
    {context}
    """

    try:


        response = client.chat.completions.create(
            model=request.model, 
            messages=[
                {"role": "system", "content": "Eres un asistente que responde solo con base en la base de conocimiento."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2
        )

        answer = response.choices[0].message.content.strip()

        save_faq(question, answer)

        return {"answer": answer, "source": "rag"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en OpenAI: {str(e)}")

