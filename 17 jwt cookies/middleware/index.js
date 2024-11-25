const jwt = require('jsonwebtoken');

const authUserMid = (req,res,next)=>{
    const jwtCliente = req.cookies.token;

    if(!jwtCliente){
        return res.json({info:'No hay token en la peticion --Middleware'});
    }

    jwt.verify(jwtCliente, process.env.JWT_SECRET,(err, payload)=>{
        if(err){
            return res.json({info:'Token no valido --Middleware'});
        }
       next();
    });
}

module.exports = {authUserMid};