const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.method)
    console.log(req.body)
    res.end('Hola Server')
});


server.listen(3000, ()=>{
    console.log('Servidor activo puerto 3000')
})