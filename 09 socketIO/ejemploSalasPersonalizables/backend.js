const http = require('http');
const {Server} = require('socket.io');
const fs = require('fs')

const serverHttp = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    return fs.createReadStream("./fronted.html").pipe(res);
});

const io = new Server(serverHttp);

io.on('connection',(socket) =>{
    socket.on('unirseGrupo',(sala) => {
        socket.join(sala);
    });

    socket.on('mandarBroadCast',(args) => {
        io.emit('broadcast', args)
    });

    socket.on('mandarGrupo',(data) => {
        const {sala, mensaje} = JSON.parse(data);
        socket.to(sala).emit(sala, mensaje);
    });
});

serverHttp.listen(3000, () => {
    console.log('Servidor corriendo port 3000')
})