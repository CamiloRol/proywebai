from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth

app = FastAPI()

# Incluir routers
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Backend FastAPI funcionando 🚀"}

def add_cors(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173"],  # Vite por defecto
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )