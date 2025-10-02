import bcrypt
import jwt
import os
from datetime import datetime, timedelta
from db import supabase

JWT_SECRET = os.getenv("JWT_KEY")

def authenticate_user(email: str, password_hash: str):
    response = supabase.table("users").select("*").eq("email", email).execute()
    
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
