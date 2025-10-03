from fastapi import APIRouter, HTTPException
from schemas.faq import FAQCreate
from db import supabase

router = APIRouter(prefix="/faq", tags=["FAQ"])

@router.post("/")
def create_faq(faq: FAQCreate):
    try:
        resp = supabase.table("faq").insert({
            "question": faq.question.strip(),
            "answer": faq.answer.strip()
        }).execute()
        return {"message": "FAQ creada correctamente", "data": resp.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
def list_faqs():
    try:
        resp = supabase.table("faq").select("*").execute()
        return {"data": resp.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
def check_faq(question: str):
    try:
        faqs = supabase.table("faq").select("*").execute()
        for faq in faqs.data:
            if faq["question"].lower() in question.lower():
                return faq["answer"]
    except:
        return None
    return None