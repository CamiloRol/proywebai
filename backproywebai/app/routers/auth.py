from fastapi import APIRouter, HTTPException
from schemas.auth import LoginRequest, LoginResponse
from core.security import authenticate_user, create_access_token
from schemas.auth import LoginRequest, LoginResponse

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest):
    user = authenticate_user(request.email, request.password)
    
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    
    token = create_access_token(user["id"])
    return {"access_token": token, "token_type": "bearer"}
