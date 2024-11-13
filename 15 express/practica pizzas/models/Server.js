const express = require('express');
class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.paths = {
            pizzas:'/pizzas'
        };
        
        this.middleware();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ' + this.port)
        });
    }

    routes(){
        this.app.use(this.paths.pizzas, require('../router/pizzasRouter'));
    }

    middleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static('./public'));
    }
}

module.exports = Server;