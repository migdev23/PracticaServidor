const { Router } = require('express');
const router = new Router();
const users = require('../db/users');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const path = require('path');

router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.get('/login',(req,res)=>{
    return res.sendFile(path.join(__dirname, '../public/login.html'));
});


router.post('/login', async (req, res) => {
    const { nombre, password } = req.body;

    const user = users.find(u => u.nombre === nombre);

    if (!user) {
        return res.status(400).json({info:'Error en la auth --Usuario no existe'});
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) return res.status(400).send('Error en la auth --PWD');

    const accesJWT = jwt.sign({ username: nombre }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", accesJWT, {
        httpOnly:true,
        secure:false,
        sameSite:"Strict",
        maxAge:36000000000
    })

    return res.json({ accesJWT });
});

router.post('/register', async (req, res) => {
    const { nombre, password } = req.body;
   

    if (!nombre || !password) {
        return res.status(400).json({info:'Error en la solicitud'});
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    users.push({ nombre, password: hashedPwd });

    return res.redirect("/auth/login");
});


module.exports = router