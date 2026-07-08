import subprocess

def open_brave():
    subprocess.Popen([
        "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
    ])
    return "Opening Brave Browser."

def open_cursor():
    subprocess.Popen([
        "/Applications/Cursor.app/Contents/MacOS/Cursor"
    ])
    return "Opening Cursor."

def open_settings():
    subprocess.Popen([
        "open",
        "/System/Applications/System Settings.app"
    ])
    return "Opening System Settings."