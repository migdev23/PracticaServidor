const dgram = require("dgram");
const server = dgram.createSocket("udp4");

let totalUsuarios = 0;

server.on("message", (msg, rinfo) => {
    totalUsuarios++;

    if (totalUsuarios <= 3) {
        console.log(`Nuevo cliente`);
        server.send('Bienvenido a UDP', rinfo.port, rinfo.address, (error) => {
            console.log(`Mensaje enviado a ${rinfo.address}:${rinfo.port}`);
        });
    }
    
});

server.on("error", (err) => {
    console.log(`Error`);
    server.close();
});

server.on("listening", () => {
    const address = server.address();
    console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

server.bind(3000);
