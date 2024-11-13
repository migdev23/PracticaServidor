require('dotenv').config()
const express = require('express');
const app = express();

app.get('/contactos',(req,res)=>{
    res.send('Lista contactos');
});

app.post('/usuarios/nuevo',(req,res)=>{
    res.send('Nuevo Usuario');
});

app.listen(process.env.PORT, ()=>{
    console.log('Servidor funcionando');
});