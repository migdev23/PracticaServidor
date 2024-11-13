const app = require('express')();
const port = 3000;

app.use((req, res, next)=>{
    req.currentDate = new Date();
    (Math.random() > 0.6) 
    ? res.send('No puedes acceder')
    : next();    
});

app.get('/', (req,res) => res.send(req.currentDate));

app.listen(port,() => console.log(`Servidor corriendo: ${port}`));