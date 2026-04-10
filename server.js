const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const port = Number(process.env.PORT) || 4173;
const host = process.env.HOST || "0.0.0.0";
const rootDir = __dirname;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

const compressibleTypes = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".svg",
  ".txt"
]);

const immutableAssetTypes = new Set([
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".png",
  ".svg",
  ".webp"
]);

function buildHeaders(filePath, ext) {
  const stats = fs.statSync(filePath);
  const headers = {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
    "Last-Modified": stats.mtime.toUTCString(),
    ETag: `W/"${stats.size}-${Math.floor(stats.mtimeMs)}"`,
    Vary: "Accept-Encoding"
  };

  if (path.basename(filePath) === "index.html") {
    headers["Cache-Control"] = "public, max-age=0, must-revalidate";
  } else if (immutableAssetTypes.has(ext)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  } else {
    headers["Cache-Control"] = "public, max-age=3600";
  }

  return headers;
}

function sendFile(filePath, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  let headers;

  try {
    headers = buildHeaders(filePath, ext);
  } catch (error) {
    res.writeHead(error.code === "ENOENT" ? 404 : 500, {
      "Content-Type": "text/plain; charset=utf-8"
    });
    res.end(error.code === "ENOENT" ? "404 Not Found" : "500 Internal Server Error");
    return;
  }

  if (req.headers["if-none-match"] === headers.ETag) {
    res.writeHead(304, headers);
    res.end();
    return;
  }

  if (req.headers["if-modified-since"]) {
    const lastModified = new Date(headers["Last-Modified"]).getTime();
    const ifModifiedSince = new Date(req.headers["if-modified-since"]).getTime();
    if (!Number.isNaN(lastModified) && !Number.isNaN(ifModifiedSince) && lastModified <= ifModifiedSince) {
      res.writeHead(304, headers);
      res.end();
      return;
    }
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(error.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      res.end(error.code === "ENOENT" ? "404 Not Found" : "500 Internal Server Error");
      return;
    }

    if (compressibleTypes.has(ext)) {
      const acceptEncoding = res.req.headers["accept-encoding"] || "";

      if (acceptEncoding.includes("br")) {
        headers["Content-Encoding"] = "br";
        res.writeHead(200, headers);
        res.end(zlib.brotliCompressSync(data));
        return;
      }

      if (acceptEncoding.includes("gzip")) {
        headers["Content-Encoding"] = "gzip";
        res.writeHead(200, headers);
        res.end(zlib.gzipSync(data));
        return;
      }
    }

    res.writeHead(200, headers);
    res.end(data);
  });
}

function createServer(baseDir = rootDir) {
  return http.createServer((req, res) => {
    const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const relativePath = safePath === "/" ? "index.html" : safePath.replace(/^[/\\]+/, "");
    let filePath = path.join(baseDir, relativePath);

    if (!filePath.startsWith(baseDir)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("403 Forbidden");
      return;
    }

    fs.stat(filePath, (error, stats) => {
      if (!error && stats.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }
      sendFile(filePath, req, res);
    });
  });
}

if (require.main === module) {
  const server = createServer();
  server.listen(port, host, () => {
    console.log(`Roselune survey is running at http://${host}:${port}`);
  });
}

module.exports = {
  createServer,
  host,
  port
};
