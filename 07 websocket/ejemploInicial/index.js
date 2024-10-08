const WebSocket = require('./node_modules/ws')
const wss = new WebSocket.Server({port:8080})

const sacarHoraMinutosMilisegundos = () => {
    const fecha = new Date();
    return  `${fecha.getHours()}:${fecha.getUTCMinutes()}:${fecha.getMilliseconds()}`;
}

wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    
    ws.send(JSON.stringify(
        {mensaje:`Bienvenido al Servidor WebSocket`,  hora:sacarHoraMinutosMilisegundos()}
    )); // ENVIAR MENSAJE AL CLIENTE

    ws.on('message',(message) => { // CUANDO RECIBE UN MENSAJE DEL CLIENTE
        const fecha = new Date();
        const data = {
            mensaje:`Mensaje del servidor: ${message.toString()}`,
            hora:sacarHoraMinutosMilisegundos()
        };

        ws.send(JSON.stringify(data));
    })

    ws.on('close', () => { //CUANDO EL CLIENTE SE DESCONECTA
        console.log('Cliente desconectado');
    });

    ws.on('error', (error) => { // CUANDO A SURGIDO UN ERROR
        console.error(`Error en la conexión: ${error}`);
    });
})




