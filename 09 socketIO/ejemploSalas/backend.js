const http = require('http');
const {Server} = require('socket.io');
const fs = require('fs')

const serverHTTP = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    return fs.createReadStream("./fronted.html").pipe(res);
});

const io = new Server(serverHTTP);

io.on('connection',(socket)=>{

    socket.on('unirse',(argv)=>{
        socket.join('sala');
        io.to("sala").emit('salaTopic',"se ha unido alguien a la sala");
    });

});

serverHTTP.listen(3000, ()=>{
    console.log('Servidor corriendo');    
});

