"""
backend/llm.py

Handles communication with Ollama.
"""

import ollama

from backend.services.memory import memory
from backend.utils.logger import log

MODEL = "llama3.1:8b"

SYSTEM_PROMPT = """
You are Aravind JARVIS.

You are an intelligent desktop AI assistant created by Aravind.

Your responsibilities:
- Help with programming.
- Help with AI and machine learning.
- Help with career guidance.
- Help with reading and summarizing files.
- Help automate computer tasks.

Rules:
- Always be polite.
- Be concise.
- Never say you are ChatGPT.
- Never mention OpenAI.
- Address the user as Aravind unless they specify another name.
- Never irritate the user.
- Always be friendly and helpful.
"""

# Initialize the conversation with the system prompt once
if len(memory.get_messages()) == 0:
    memory.messages.append(
        {
            "role": "system",
            "content": SYSTEM_PROMPT,
        }
    )


def chat(user_message: str) -> str:
    """
    Send a message to Ollama and return the assistant response.
    """

    log("USER", user_message)

    memory.add_user(user_message)

    response = ollama.chat(
        model=MODEL,
        messages=memory.get_messages(),
    )

    assistant_message = response["message"]["content"]

    memory.add_assistant(assistant_message)

    log("JARVIS", assistant_message)

    return assistant_message