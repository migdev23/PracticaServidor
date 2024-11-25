const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.paths = {
            public: '',
            private: '/private',
            auth: '/auth',
        }
        this.middleware();
        this.routes();
    }

    middleware() {
        //Pagina publica
        this.app.use(express.static(path.join(__dirname, '../public')));

        //PUG VIEWS
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');

        this.app.use(cookieParser());

        //Parsear body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(this.paths.public, require('../routes/public'));
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.private, require('../routes/private'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
        })
    }
}

module.exports = Server