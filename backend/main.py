from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.chat import router as chat_router

app = FastAPI(
    title="Aravind JARVIS",
    version="1.0.0",
    description="Personal AI Assistant powered by Ollama",
)

# -------------------------------
# CORS Configuration
# -------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Routes
# -------------------------------
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "status": "running",
        "assistant": "Aravind JARVIS",
        "version": "1.0.0",
        "backend": "FastAPI",
        "model": "llama3.1:8b",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }