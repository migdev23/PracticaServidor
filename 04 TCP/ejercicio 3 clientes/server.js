const net = require("net");
let countUsers = 0;
const server = net.createServer((client) => {
  countUsers++;
  if (countUsers <= 3) {
    console.log("Cliente conectado");
    client.write(`Bienvenido a TCP ${countUsers}`);

    client.on("data", (data) => {
      console.log(data.toString());
    });

    client.on("end", () => {
      console.log("client disconnected");
    });

    client.on("error", () => {
      console.log("hubo un error");
    });
  }else{
    client.write(`No te voy a atender`);
    client.destroy()
  }
});

server.listen(3000, () => {
  console.log("Server connect 3000");
});
