import http from"http";
import fs from 'fs';
import queryString from 'query-string';

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200,{ "Content-Type": "text/html" });
    return fs.createReadStream("./public/index.html").pipe(res);
  } else if (req.url.includes('/form')) {
    const urlparametros = queryString.parse(req.url.split('?')[1])
    res.writeHead(200,{ "Content-Type": "text/html" });
    return res.end(JSON.stringify(urlparametros))
  }
});

server.listen(3000, () => {
  console.log("Server 3000");
});
