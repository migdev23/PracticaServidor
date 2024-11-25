const bcrypt = require('bcrypt');
const { generarToken } = require('../helpers/jwt.js');

const register = async(req,res) => {
    try{
        let {email, password} = req.body;
        const users = require('../db/db.js');
        password = await bcrypt.hash(password,10);
        users.push({email,password});
        console.log(users);
        return res.json({error:null, msg:'¡Usuario creado con exito!'});
    }catch(e){
        console.log(e);
        return res.status(500).json({error:'Hubo un error al guardar el usuario'})
    }
}

const login = async(req,res)=>{
    let {email} = req.body;
    const token = generarToken({email});
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:true,
        maxAge:360000000
    });
    return res.json({error:null,msg:'¡Has sido autenticado!',token});
}

const logout = (req,res)=>{
    res.clearCookie("token");
    return res.redirect("/");
}

module.exports = {register, login, logout}