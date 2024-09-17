const http = require('http')

const server = http.createServer((req,res) =>{
    console.log('Recibido Peticion')
    res.end('Hola Mundo')
})

server.listen(3000,()=>{
    console.log('Funcionando')
})