const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function getLocalNetworkIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split("?")[0];
  let filePath = path.join(ROOT_DIR, cleanUrl === "/" ? "index.html" : cleanUrl);

  // Evitar directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end("Acceso denegado");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback SPA a index.html
      filePath = path.join(ROOT_DIR, "index.html");
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end("Error interno del servidor");
        return;
      }
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "no-cache"
      });
      res.end(content);
    });
  });
});

server.listen(PORT, "0.0.0.0", () => {
  const localIP = getLocalNetworkIP();
  console.log("=========================================================");
  console.log("🎖️  SERVIDOR TÁCTICO PERMANENCIA FAS - ACTIVO");
  console.log("=========================================================");
  console.log(`💻 En este PC:      http://localhost:${PORT}`);
  console.log(`📱 En tu Móvil (WiFi): http://${localIP}:${PORT}`);
  console.log("=========================================================");
});
