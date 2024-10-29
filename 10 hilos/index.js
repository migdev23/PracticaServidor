const {
    Worker,
    isMainThread,
    workerData,
    parentPort,
} = require("node:worker_threads");

if (isMainThread) {
    console.log("HILO PRINCIPAL");
    for (let index = 0; index < 3; index++) {
        const data = `hijo ${index}`;
        const worker = new Worker(__filename, { workerData: data });
        worker.on("message", (msg) => {
            console.log(msg);
        });
    }
} else {
    console.log("HILO HIJO");
    const source = workerData;
    parentPort.postMessage(source.toUpperCase());
}
