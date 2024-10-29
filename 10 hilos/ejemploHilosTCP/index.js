const {
    Worker,
    isMainThread,
    workerData,
    parentPort,
} = require("node:worker_threads");

const net = require("net");
const arr_clients = [];

if (isMainThread) {
    const server = net.createServer((client) => {
        console.log("cliente conectado");
        
        arr_clients.push(client);

        const indice = arr_clients.length-1

        client.write("Bienvenido a TCP");

        client.on("data", (data) => {
            new Worker(__filename, { workerData: {indice, info:data.toString()}});
        });

        client.on("end", () => {
            console.log("client disconnected");
        });

        client.on("error", () => {
            client.end();
        });
    });

    server.listen(3000, () => {
        console.log("Server connect 3000");
    });

} else {
    const {indice, info} = workerData;
    console.log(arr_clients.length)
    //parentPort.postMessage('MENSAJE DEL HIJO');
}
