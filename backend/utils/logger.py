from pathlib import Path
from datetime import datetime

LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)

LOG_FILE = LOG_DIR / "chat.log"


def log(role: str, message: str):
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(
            f"[{datetime.now()}] {role}: {message}\n"
        )