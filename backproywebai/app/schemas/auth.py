from pydantic import BaseModel
import uuid

class LoginRequest(BaseModel):
    email: str
    password_hash: str

class UserResponse(BaseModel):
    id: uuid.UUID
    email: str
    full_name: str | None = None
    avatar_url: str | None = None
    phone: str | None = None
    role_id: int

class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse
