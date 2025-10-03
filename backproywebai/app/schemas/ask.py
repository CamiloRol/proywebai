from pydantic import BaseModel

class AskRequest(BaseModel):
    question: str
    model: str