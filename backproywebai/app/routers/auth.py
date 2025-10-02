from fastapi import APIRouter, HTTPException
from schemas.auth import LoginRequest, LoginResponse
from core.security import authenticate_user, create_access_token, hash_password
from schemas.auth import LoginRequest, LoginResponse
from schemas.user import UserCreate
from db import supabase
import uuid

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest):
    user = authenticate_user(request.email, request.password_hash)
    
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    
    token = create_access_token(user["id"])
    return {"access_token": token, "token_type": "bearer"}

@router.post("/register")
def register(user: UserCreate):
    
    existing_user = supabase.table("users").select("*").eq("email", user.email).execute()
    if existing_user.data:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")

    
    hashed_pw = hash_password(user.password_hash)
    user_id = str(uuid.uuid4())
    supabase.table("users").insert({
        "id": user_id,
        "email": user.email,
        "password_hash": hashed_pw,
        "role_id": 2
    }).execute()

    
    if user.profile:
        supabase.table("user_profiles").insert({
            "user_id": user_id,
            "full_name": user.profile.full_name if hasattr(user.profile, 'full_name') else None,
            "avatar_url": user.profile.avatar_url if hasattr(user.profile, 'avatar_url') else None,
            "phone": user.profile.phone if hasattr(user.profile, 'phone') else None,
            "metadata": user.profile.metadata if hasattr(user.profile, 'metadata') else None
        }).execute()

    return {"message": "Usuario registrado exitosamente", "user_id": user_id}