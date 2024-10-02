const http = require("http");
const { routerGet } = require("../routes/get");
const { routerPost } = require("../routes/post");
const { routerPatch } = require("../routes/patch");
const { routerDelete } = require("../routes/delete");
const { createReqBody } = require("../middlewares/createReqBody");

class Server {
  constructor() {
    this.app = http.createServer(async(req, res) => {
      await this.middlewares(req);
      this.routes(req, res);
    });
  }

  listen() {
    this.app.listen(3000, () => {
      console.log("Port Server listening at 3000");
    });
  }

  routes(req, res) {
    switch (req.method.toLowerCase()) {
      case "get":
        routerGet(req, res);
        break;

      case "post":
        routerPost(req, res);
        break;

      case "patch":
        routerPatch(req, res);
        break;

      case "delete":
        routerDelete(req, res);
        break;

      default:
        res.writeHead(404, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "ERROR" }));
        break;
    }
  }

  async middlewares(req) {
    await createReqBody(req);
  }

}

module.exports = Server;
