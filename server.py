import http.server
import socketserver
import os

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        return super().do_GET()

    def log_request(self, code='-', size='-'):
        print(f"Request: {self.requestline} | Code: {code} | Size: {size}")

PORT = 8000

with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()