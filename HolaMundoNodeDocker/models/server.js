const express = require('express')
class Server {
    constructor() {
        this.app = express();
        this.path = {
            pathPrueba:'/prueba'
        }

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.path.pathPrueba, require('../router/prueba'))
    }

    listen(){
        this.app.listen(7000, () => {
            console.log('Servidor Escuchando')
        })
    }

}

module.exports = Server