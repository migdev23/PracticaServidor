const http = require('http');
const {Server} = require('socket.io');
const fs = require('fs')

const serverHTTP = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    return fs.createReadStream("./fronted.html").pipe(res);
});


const io = new Server(serverHTTP)

io.on('connect',(socket)=>{
    console.log('cliente conectado');

    socket.on('mensaje2314',(arg)=>{
        //socket.emit('respuesta', arg) //lo devuelve a mi mismo
        io.emit('broadcast', arg)
    });

})

serverHTTP.listen(3000, () => {
    console.log('Server corriendo en el puerto 3000')
})