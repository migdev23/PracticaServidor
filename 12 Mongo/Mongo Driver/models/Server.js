const http = require("http");
const { createReqBody } = require("../middlewares/createReqBody");
const { dbController } = require('./Database')
class Server {
    constructor() {
        this.init();
    }

    async init() {
        return new Promise(async (resolve, reject) => {
            try {
                const [status, collection] = await dbController();

                this.app = http.createServer(async (req, res) => {
                    await this.middleware(req);
                    this.router(req, res);
                });
                resolve()
            } catch (error) {
                reject()
            }
        })
    }

    async middleware(req) {
        await createReqBody(req)
    }

    router(req, res) {
        return res.end(JSON.stringify({ info: 'Ok' }))
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('Server corriendo en el localhost, puerto 3000');
        });
    }


}





module.exports = Server;

