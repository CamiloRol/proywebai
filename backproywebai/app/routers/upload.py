from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
import pandas as pd
from io import BytesIO
from openai import OpenAI
from core.security import get_current_user
from db import supabase
import os

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
router = APIRouter(prefix="/etl", tags=["etl"])

if not OPENAI_API_KEY:
    raise ValueError("No se encontró la variable OPENAI_API_KEY en el entorno")
client = OpenAI(api_key=OPENAI_API_KEY)


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    current_user=Depends(get_current_user)
):
    try:
        doc = supabase.table("documents").insert({
            "title": file.filename,
            "description": "Archivo cargado desde front",
            "file_path": file.filename,
            "metadata": {"origen": "front"},
            "uploaded_by": current_user["id"]
        }).execute()

        document_id = doc.data[0]["id"]

        contents = await file.read()
        if file.filename.endswith(".csv"):
            df = pd.read_csv(BytesIO(contents), header=None)
            df.columns = [f"col_{i}" for i in range(len(df.columns))]
        else:
            df = pd.read_excel(BytesIO(contents))
            if not all(isinstance(col, str) for col in df.columns):
                df.columns = [f"col_{i}" for i in range(len(df.columns))]

        rows = df.to_dict(orient="records")

        data = [{"document_id": document_id, "data": row} for row in rows]

        supabase.table("users_data").insert(data).execute()

        for _, row in df.iterrows():
            texto = " ".join([f"{col}: {row[col]}" for col in df.columns])
            emb = client.embeddings.create(
                model="text-embedding-3-small",
                input=texto
            ).data[0].embedding

            supabase.table("chunks").insert({
                "document_id": document_id,
                "content": texto,
                "embedding": emb
            }).execute()

        return {
            "status": "ok",
            "document_id": document_id,
            "rows_inserted": len(df),
            "columns_detected": list(df.columns)
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


