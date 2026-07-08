import tkinter as tk
from tkinter import scrolledtext

from backend.llm import chat


def send_message():

    user = entry.get().strip()

    if not user:
        return

    chat_box.insert(tk.END, f"\nYou: {user}\n")

    entry.delete(0, tk.END)

    reply = chat(user)

    chat_box.insert(tk.END, f"\nJarvis: {reply}\n")

    chat_box.see(tk.END)


root = tk.Tk()

root.title("Aravind JARVIS")

root.geometry("900x650")

chat_box = scrolledtext.ScrolledText(
    root,
    wrap=tk.WORD,
    font=("Helvetica", 13)
)

chat_box.pack(
    padx=10,
    pady=10,
    fill=tk.BOTH,
    expand=True
)

entry = tk.Entry(
    root,
    font=("Helvetica", 14)
)

entry.pack(
    padx=10,
    pady=10,
    fill=tk.X
)

send_button = tk.Button(
    root,
    text="Send",
    command=send_message
)

send_button.pack(
    pady=5
)

entry.bind("<Return>", lambda event: send_message())

root.mainloop()