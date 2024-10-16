const aedes = require('aedes')();
const net = require('net');
const port = 1883;
console.log('SERVIDOR')
const server = net.createServer(aedes.handle);

server.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port);
});

aedes.on('client', (client) => {
    console.log('Cliente conectado')
});

aedes.on('publish', ({topic, payload}, client) => {
    if(client) console.log(client.id, topic.toString() ,payload.toString());
});

