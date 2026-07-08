# 🤖 Aravind JARVIS

A next-generation AI desktop assistant inspired by ChatGPT Agent, built using React, FastAPI, and Ollama.

Aravind JARVIS is designed to be a powerful local AI assistant capable of natural conversation, computer automation, voice interaction, file management, and intelligent task execution.

---

# ✨ Features

## AI Chat

- Local AI powered by Ollama
- Multiple model support
- Markdown rendering
- Code syntax highlighting
- Streaming responses
- Chat history
- Conversation memory

---

## Agentic AI

- Intelligent task planning
- Tool selection
- Tool execution
- Observation
- Reflection
- Retry on failures
- Context-aware reasoning

---

## Desktop Automation

- Open applications
- Close applications
- Search installed apps
- Launch websites
- File management
- Terminal execution
- Clipboard management
- Browser automation

---

## Memory

- Conversation memory
- Long-term memory
- User preferences
- Frequently used applications
- Frequently used folders
- Project history

---

## Voice Assistant

- Speech-to-text
- Text-to-speech
- Wake word support
- Hands-free interaction

---

## Vision (Upcoming)

- Screenshot analysis
- OCR
- Webcam integration
- Image understanding

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Axios
- React Markdown
- Lucide React

---

## Backend

- Python
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

---

## AI

- Ollama
- Llama 3.1
- Future support for Gemini
- Future support for Claude
- Future support for OpenAI

---

# 📁 Project Structure

```
Aravind-JARVIS/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── tools/
│   ├── models/
│   ├── memory/
│   ├── utils/
│   ├── database/
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── assets/
│   └── package.json
│
├── database/
│
├── logs/
│
├── memory/
│
├── assets/
│
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Aravind-JARVIS.git

cd Aravind-JARVIS
```

---

## Backend

Create a virtual environment

```bash
python3 -m venv .venv
```

Activate it

macOS / Linux

```bash
source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn backend.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

API Docs

```
http://127.0.0.1:8000/docs
```

---

## Frontend

Navigate to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🧠 Ollama Setup

Install Ollama

https://ollama.com

Download a model

```bash
ollama pull llama3.1:8b
```

Verify installation

```bash
ollama list
```

Start chatting

```bash
ollama run llama3.1:8b
```

---

# 📌 Current Features

- AI Chat
- Conversation Memory
- React Frontend
- FastAPI Backend
- Ollama Integration
- Markdown Rendering
- Modern Chat UI

---

# 🚧 Roadmap

## Phase 1

- Chat UI
- Backend API
- Memory
- Ollama Integration

## Phase 2

- Tool Calling
- Desktop Automation
- File Operations
- Browser Automation

## Phase 3

- Voice Assistant
- Wake Word
- Speech Recognition
- Text-to-Speech

## Phase 4

- Vision
- OCR
- Screenshot Analysis
- Camera Integration

## Phase 5

- Multi-Agent Architecture
- Plugin System
- Workflow Automation
- Task Scheduling

---

# 🔒 Safety

Aravind JARVIS never performs destructive actions without user confirmation.

Confirmation is required for:

- File deletion
- Folder deletion
- System shutdown
- Restart
- Terminal commands with elevated privileges

---

# 🎯 Future Goals

- Fully autonomous desktop assistant
- Intelligent planning
- Computer automation
- Browser agent
- Coding assistant
- Voice assistant
- Vision agent
- Multi-agent collaboration
- Plugin marketplace

---

# 📸 Screenshots

(Add screenshots here as the project evolves.)

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Aravind K**

Computer Science Engineer

AI & Full Stack Developer

GitHub: https://github.com/YOUR_USERNAME

---

# ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.

---

## Vision

> "Build a personal AI assistant that can understand, reason, remember, and safely interact with the computer to help users accomplish real-world tasks efficiently."
