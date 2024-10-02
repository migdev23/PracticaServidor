const net = require("net");

const client = net.createConnection({port:3000}, () => {
    console.log('Conectado al servidor mensaje desde el cliente')
    client.write('Hola soy un cliente')
});

client.on('data', (data) => {
    console.log(data.toString())
});

client.on('end', () => {
    console.log('fin')
});


client.on('error', () => {
    client.end();
});
