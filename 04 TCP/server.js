const net = require("net");
const server = net.createServer((client) => {
  console.log("Cliente conectado");
  client.write("Bienvenido a TCP");

  client.on('data', (data) => {
    console.log(data.toString())
  });

  client.on('end', () => {
    console.log('client disconnected')
  });

  client.on('error', () => {
    console.log('hubo un error')
  });

});

server.listen(3000, () => {
  console.log("Server connect 3000");
});
