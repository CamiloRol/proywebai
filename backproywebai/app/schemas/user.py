from pydantic import BaseModel, EmailStr
from typing import Optional, Dict

# Perfil de usuario (opcional)
class UserProfile(BaseModel):
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None
    phone: Optional[str] = None
    metadata: Optional[Dict] = None

# Registro de usuario (obligatorio)
class UserCreate(BaseModel):
    email: EmailStr
    password_hash: str
    role_id: Optional[int] = 2
    profile: Optional[UserProfile] = None