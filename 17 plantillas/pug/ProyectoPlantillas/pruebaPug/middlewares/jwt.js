const { verificarToken } = require("../helpers/jwt");

const autenticadoJWT = (req, res, next) => {
    console.log('1')
    if(!req.cookies.token){
        console.log('2')
        return res.status(404).json({error:'No se envio ningun token de autenticacion'});
    }

    if(!verificarToken(req.cookies.token)){
        console.log('3')
        return res.status(404).json({error:'El token ha caducaco o es incorrecto'});
    }

    console.log('4')

    return next();
}

module.exports = {autenticadoJWT}