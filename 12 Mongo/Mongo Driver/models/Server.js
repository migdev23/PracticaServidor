const http = require("http");
const { createReqBody } = require("../middlewares/createReqBody");
const { DbController } = require('./DbController');
const routerGet = require("../routers/routerGet");
const routerPost = require("../routers/routerPost");
const routerPut = require("../routers/routerPut");
const routerDelete = require("../routers/routerDelete");
class Server {
    constructor() {
        this.init();
    }

    async init() {
        this.dbController = new DbController("mongodb://localhost:27017", "empledepart", "depart");

        this.app = http.createServer(async (req, res) => {
            await this.middleware(req);
            this.router(req, res);
        });
    }

    async middleware(req) {
        await createReqBody(req)
    }

    async router(req, res) {
        switch (req.method.toLowerCase()) {
            case 'get':
                return routerGet(req, res, this.dbController);
            break;

            case 'post':
                return routerPost(req, res, this.dbController);
            break;

            case 'put':
                return routerPut(req, res, this.dbController);
            break;

            case 'delete':
                return routerDelete(req, res, this.dbController);
            break;

            default:
                res.writeHead(404, { "Content-type": "application/json" });
                return res.end(JSON.stringify({ result: false, info: 'Error al realizar la peticion' }))
                break;
        }
        return res.end(JSON.stringify({ info: 'Ok' }))
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('Server corriendo en el localhost, puerto 3000');
        });
    }

}





module.exports = Server;

