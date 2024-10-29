const http = require('http');
const Db = require('./db');
const { createReqBody } = require('../middleware/createReqBody');
const { routerGet } = require('../routes/routerGET');
const { routerDelete } = require('../routes/routerDELETE');
const { routerPost } = require('../routes/routerPOST');
const { routerPatch } = require('../routes/routerPATCH.JS');

class Server {

    constructor() {
        this.main();
    }

    async main() {
        this.dbController = new Db();
        if(await this.dbController.connectiondb()){
            this.app = http.createServer(async (req, res) => {
                await this.middleware(req, res); 
                return this.routes(req, res, this.dbController);
            });
            this.listen()
        }
    }

    async middleware(req, res) {
        try {
            await createReqBody(req);
        } catch (error) {
            res.writeHead(404, { "Content-type": "application/json" });
            return res.end(JSON.stringify({ message: "ERROR" }));
        }
    }


    routes(req, res, dbController) {
        switch (req.method.toLowerCase()) {
            case "get":
                routerGet(req, res, dbController);
                break;

            case "delete":
                routerDelete(req, res, dbController);
                break;

            case "post":
                routerPost(req, res, dbController);
                break;

            case "patch":
                routerPatch(req, res, dbController);
                break;

            default:
                res.writeHead(404, { "Content-type": "application/json" });
                res.end(JSON.stringify({ message: "ERROR" }));
                break;
        }
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('Servidor WEB corriendo en el puerto 3000');
        })
    }
}


module.exports = Server;
