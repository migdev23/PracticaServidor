const path = require('path');
const { verificarToken } = require('../helpers/jwt');
const pageInit = (req,res) => {
    const token = req.cookies.token;
    res.render(path.join(__dirname, '../views/public/index.pug'), { 
        login:verificarToken(token),
        fecha: new Date().toDateString()
    });
}

module.exports = {
    pageInit
}