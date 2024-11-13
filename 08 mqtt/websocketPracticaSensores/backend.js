const aedes = require('aedes')();
const ws = require('ws');
const http = require('http');
const websocketStream = require('websocket-stream');

// const mqttPort = 1883;
const wsPort = 8080;


//SERVIDOR WEB CON WEBSOCKET
const httpServer = http.createServer();
const wsServer = new ws.Server({server:httpServer});
httpServer.listen(wsPort, () => {
    console.log(`Broker MQTT corriendo sobre webSocket en ws//localhost:${wsPort}`);
});


wsServer.on('connection', (socket) => {
    //CON ESTAS LINEAS DELEGAMOS CUANDO SE CONECTA UN CLIENTE AL WEBSOCKET Y LO GESTIONA AEDES EL BROKER MQTT CON SUS EVENTOS
    const stream = websocketStream(socket);
    aedes.handle(stream);
})


//SERVIDOR MQTT
// const mqttServer = net.createServer(aedes.handle);
// mqttServer.listenerCount(mqttServer, () => {
//      console.log(`Broket MQTT corriendo en tcp://localhost:${mqttPort}`)
// });

//EVENTOS AEDES MQTT DEL BROKER
aedes.on('client', (client) => { //CUANDO SE CONECTA UN CLIENTE
    console.log(`Cliente conectado: ${client ? client.id : 'desconocido'}`);
});

aedes.on('publish', (packet, client) => { //CUANDO SE HACE UNA PUBLICACION
    if(client){
        console.log(`Mensaje publicado por ${client.id} en ${packet.topic}: ${packet.payload.toString()}`);
    }
});

aedes.on('suscribe', (subscriptions, client) => { //CUANDO SE EJECUTA UNA SUSBCRIPCION
    console.log(`Cliente ${client ? client.id : 'desconocido'} suscrito a ${subscriptions.map(s => s.topic).join(',')}`);
});