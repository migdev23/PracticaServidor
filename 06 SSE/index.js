const http = require('http');


const server = http.createServer((req,res) => {
    console.log('hola')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
    })

    const sendEvent = () => {
        const eventData = `data: ${new Date().toLocaleTimeString()} \n\n`;
        res.write(eventData);
    };

    const intervalId = setInterval(sendEvent, 2000);

    req.on('close',()=> {
        clearInterval(intervalId);
    })

});


server.listen(5000, ()=> {
    console.log('Servidor escuchando')
})