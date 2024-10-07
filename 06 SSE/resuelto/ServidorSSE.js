const http = require("http");

// Crear el servidor
const server = http.createServer((req, res) => {
    // Habilitar CORS manualmente
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen (no recomendable para producción, 
                                                       //reemplazarlo por el dominio específico que desees permitir)
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Configurar los encabezados de SSE
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
    });

    // Enviar eventos periódicos al cliente cada 2 segundos
    const sendEvent = () => {
        const eventData = `data: ${new Date().toLocaleTimeString()}\n\n`;
        res.write(eventData);
    };

    const intervalId = setInterval(sendEvent, 2000);

    // Limpiar el intervalo cuando el cliente cierra la conexión
    req.on("close", () => {
        clearInterval(intervalId);
    });

});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
    console.log("Servidor SSE escuchando en http://localhost:3000");
});
