var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


class Server {
    constructor() {
        this.app = express();
        this.path = {
            uploads:'/upload',
            index:'/'
        }

        this.middleware();
        this.routes()
    }

    middleware(){
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');

        this.app.use(logger('dev'));
        this.app.use(express.json());
        
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    routes(){
        this.app.use(this.path.index, require('../routes/index'));
        this.app.use(this.path.uploads, require('../routes/uploads'));
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Servidor corriendo en localhost:${process.env.PORT}`);
        });
    }

}

module.exports = Server;