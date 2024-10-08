const WebSocket = require('ws')
const fs = require('fs')

const wss = new WebSocket.Server({port:8080})
let clients = [];
const dbFile = './dbMensajes.json';

const getAllDate = () => {
    const fecha = new Date();
    return `${fecha.getHours()}:${fecha.getUTCMinutes()}`;
}

const broadcastMessage = (objeto) =>{
    clients.forEach((cliente) => {
        cliente.send(JSON.stringify(objeto))
    })
}

const loadMessage = (ws) => {
    const reader = fs.createReadStream(dbFile);
    reader.on('data', function (chunk) {
        const data = {typeMessage:'DATA_DB', dataDB:chunk.toString()};
        ws.send(JSON.stringify(data))
    });
    
}

const saveMessageDB = (objetoMensaje) => {
    let dataDB = JSON.parse(fs.readFileSync(dbFile).toString())
    dataDB.push(objetoMensaje);
    fs.writeFileSync(dbFile, JSON.stringify(dataDB));
}

wss.on('connection', (ws) => {

    if(clients.length === 0) ws.idClient = 0;
    else{ ws.idClient = (clients[clients.length-1].idClient) + 1};

    clients.push(ws);

    broadcastMessage({typeMessage:'LONGITUD_USER_ACTIVOS', userActivos: clients.length})
    
    ws.on('message',(event) => {
        
        const {typeMessageClient, ...resto} = JSON.parse(event) 

        switch (typeMessageClient) {
            case 'MENSAJE_USER':
                const {autor, mensaje} = resto;
                if(mensaje.trim() != '' && autor != ''){
                    const data = {
                        idClient: ws.idClient,
                        typeMessage:'MENSAJE_USER',
                        mensaje,
                        hora:getAllDate(),
                        autor
                    };
            
                    //GUARDAR DB
                    saveMessageDB(data);
            
                    //BROADCAST
                    broadcastMessage(data);    
                }
                break;
        
            case 'LOAD_MESSAGE':
                    loadMessage(ws);
                break;

            default:
                break;
        }
        
    })

    ws.on('close', () => { //CUANDO EL CLIENTE SE DESCONECTA
        clients = clients.filter((client) => client != ws );
        broadcastMessage({typeMessage:'LONGITUD_USER_ACTIVOS', userActivos: clients.length})
    });

    ws.on('error', (error) => { // CUANDO A SURGIDO UN ERROR
        console.error(`Error en la conexión: ${error}`);
    });
})




