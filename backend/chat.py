from backend.llm import chat
from backend.tools.system import (
    open_brave,
    open_cursor,
    open_settings,
)

print("===== Aravind JARVIS =====")
print("Type 'exit' to quit.\n")

while True:

    user = input("You: ")

    if user.lower() == "exit":
        break

    command = user.lower()

    if "open brave" in command:
        print("\nJarvis:", open_brave(), "\n")

    elif "open cursor" in command:
        print("\nJarvis:", open_cursor(), "\n")

    elif "open settings" in command:
        print("\nJarvis:", open_settings(), "\n")

    else:
        reply = chat(user)
        print("\nJarvis:", reply, "\n")