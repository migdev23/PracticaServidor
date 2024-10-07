const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const mensaje = Buffer.from("Hola, soy el cliente UDP");

client.send(mensaje, 3000, "localhost", (error) => {
    console.log(`Mensaje enviado: ${mensaje}`);
});

client.on("message", (msg, rinfo) => {
    console.log(`Servidor: ${msg.toString()}`);
    client.close();
});

client.on("error", (error) => {
    console.log(`Error`);
    client.close();
});
