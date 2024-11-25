require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const routerAuth = require('./routes/auth')
const {authUserMid} = require('./middleware/index');
const routerPrivate = require('./routes/private');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use('/auth/', routerAuth);

app.use('/private/',authUserMid,routerPrivate);

app.all('*',(req,res)=>{
    res.status(404).send('not found');
});

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo');
});