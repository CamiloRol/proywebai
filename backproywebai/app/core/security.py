import bcrypt
import jwt
import os
from datetime import datetime, timedelta
from db import supabase
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError

JWT_SECRET = os.getenv("JWT_KEY")
ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def authenticate_user(email: str, password_hash: str):
    response = supabase.table("users").select("id, email, password_hash, role_id, user_profiles(*)").eq("email", email).execute()
    
    if not response.data:
        return None
    
    user = response.data[0]
    hashed_password = user["password_hash"]
    
    if bcrypt.checkpw(password_hash.encode("utf-8"), hashed_password.encode("utf-8")):
        return user
    return None

def create_access_token(user_id: str):
    payload = {
        "sub": user_id,
        "exp": datetime.utcnow() + timedelta(hours=2)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8"))


def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if not user_id:
            raise HTTPException(status_code=401, detail="Token inválido")

        # Traer el usuario desde Supabase
        res = supabase.table("users").select("*").eq("id", user_id).execute()
        if not res.data:
            raise HTTPException(status_code=401, detail="Usuario no encontrado")

        return res.data[0]

    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")