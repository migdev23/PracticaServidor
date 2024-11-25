const path = require('path');
const { verificarToken } = require('../helpers/jwt');

const pagePrivate = (req,res) => {
    const token = req.cookies.token;
    res.render(path.join(__dirname, '../views/private/pagina_privada.pug'), { 
        login:verificarToken(token),
        fecha: new Date().toDateString()
    });
}

module.exports = {
    pagePrivate
}