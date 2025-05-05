from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
  def end_headers(self):
    self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    super().end_headers()

if __name__ == "__main__":
  HTTPServer(("10.0.0.177", 8000), NoCacheHandler).serve_forever()
