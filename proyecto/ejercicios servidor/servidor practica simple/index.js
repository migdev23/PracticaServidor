const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const fichero = fs.readFileSync("./public/index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(fichero);
  } else {
    let fichero = "";
    const ext = path.extname(req.url);

    switch (ext) {
      case ".css":
        fichero = fs.readFileSync(`./public${req.url}`);
        res.writeHead(200, { "Content-type": "text/css" });
        break;

      case ".png":
        fichero = fs.readFileSync(`./public${req.url}`);
        res.writeHead(200, { "Content-type": "image/png" });
        break;

      default:
        fichero = fs.readFileSync(`./public/error.html`);
        res.writeHead(404, { "Content-type": "text/html" });
    }

    res.end(fichero);
  }
});

server.listen(3000, () => {
  console.log("Servidor activo puerto 3000");
});
