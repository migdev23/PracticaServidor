const {Router} = require('express');
const routerPrivate = new Router();
const path = require('path');

routerPrivate.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,('../views/protected/private.html')));
});

routerPrivate.get('/privado2',(req,res)=>{
    return res.sendFile(path.join(__dirname,('../views/protected/private2.html')));
});


module.exports = routerPrivate;
