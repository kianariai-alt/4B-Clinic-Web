# 4B Skin Analyzer desktop host. Binds localhost only; no photo upload.
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, sys, subprocess, webbrowser, shutil

APP_DIR=Path(sys.executable).resolve().parent if getattr(sys,"frozen",False) else Path(__file__).resolve().parent
os.chdir(APP_DIR)
class LocalHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass
    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        super().end_headers()
if __name__=="__main__":
    server=ThreadingHTTPServer(("127.0.0.1", 0),LocalHandler)
    url=f"http://127.0.0.1:{server.server_address[1]}/app.html"
    paths=[Path(os.environ.get("PROGRAMFILES(X86)","C:/Program Files (x86)"))/"Microsoft/Edge/Application/msedge.exe",
        Path(os.environ.get("PROGRAMFILES","C:/Program Files"))/"Microsoft/Edge/Application/msedge.exe"]
    edge=next((p for p in paths if p.exists()),None)
    try:
        if edge: subprocess.Popen([str(edge), "--no-first-run", "--app="+url])
        else: webbrowser.open(url)
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
