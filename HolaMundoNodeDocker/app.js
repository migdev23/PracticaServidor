const http = require('http')
const server = http.createServer((req,res) =>{
    res.end('hola mundo')
})

server.listen()
