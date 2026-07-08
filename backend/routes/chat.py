from fastapi import APIRouter
from pydantic import BaseModel
from backend.llm import chat

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat_api(request: ChatRequest):
    reply = chat(request.message)
    return {"reply": reply}