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


def get_rag_chunks(question: str, limit: int = 5):
    """Traer chunks desde la tabla chunks"""
    try:
        # Generar embedding de la pregunta
        embedding = client.embeddings.create(
            model="text-embedding-3-small",
            input=question
        ).data[0].embedding

        # Llamar a la función SQL match_chunks en Supabase
        resp = supabase.rpc(
            "match_chunks",
            {"query_embedding": embedding, "match_count": limit}
        ).execute()

        return [c["content"] for c in resp.data]
    except Exception as e:
        print("Error consultando chunks:", e)
        return []


@router.post("/")
def ask(request: AskRequest):
    question = request.question.strip()

    # Revisar FAQ
    faq_answer = check_faq(question)
    if faq_answer:
        return {"answer": faq_answer, "source": "faq"}

    # Recuperar chunks del RAG
    rag_chunks = get_rag_chunks(question)
    if not rag_chunks:
        return {"answer": "No encontré información en la base de conocimiento.", "source": "none"}

    context = "\n\n".join(rag_chunks)

    prompt = f"""
    Responde usando únicamente el siguiente contexto.
    Si no hay datos relevantes, responde:
    "No encontré información en la base de conocimiento."

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
            temperature=0
        )

        answer = response.choices[0].message.content.strip()

        # Guardar en FAQ
        save_faq(question, answer)

        return {"answer": answer, "source": "rag"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en OpenAI: {str(e)}")
