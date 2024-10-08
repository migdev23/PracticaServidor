const form = document.querySelector('form');
const input = document.querySelector('textarea');
const mensajesCajaDOM = document.querySelector('.messagesContainer');
const userActivosCajaDOM = document.querySelector('#userActivos');
const nombreUsuario = prompt('Introduce tu nombre de usuario')
const ws = new WebSocket('ws://localhost:8080')

document.title = nombreUsuario;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = {
        autor: nombreUsuario,
        mensaje: input.value.trim(),
        typeMessageClient: 'MENSAJE_USER'
    }

    ws.send(JSON.stringify(data));
})


ws.onopen = (event) => {
    const data = {
        typeMessageClient: 'LOAD_MESSAGE'
    }
    ws.send(JSON.stringify(data));
};

ws.onmessage = (event) => {

    const { typeMessage, ...resto } = JSON.parse(event.data)

    switch (typeMessage) {
        case 'LONGITUD_USER_ACTIVOS':
            const { userActivos } = resto
            userActivosCajaDOM.innerHTML = `<strong>Usuarios Activos: ${userActivos}</strong>`
            break;

        case 'MENSAJE_USER':
            const { mensaje, hora, autor, idClient } = JSON.parse(event.data);
            mensajesCajaDOM.innerHTML += `
                            <div id='client${idClient}'>
                                <div class='autorMessage'>${autor}:</div>
                                <div class='message'>${mensaje}</div>
                                <div class='hourMessage'>${hora}</div>
                            </div> `

            mensajesCajaDOM.scroll({
                top: mensajesCajaDOM.scrollHeight,
                behavior: "smooth",
            });
            break;

        case 'DATA_DB':
            const { dataDB } = JSON.parse(event.data);

            JSON.parse(dataDB).forEach(({ mensaje, hora, autor, idClient }) => {
                mensajesCajaDOM.innerHTML += `
                            <div id='client${idClient}'>
                                <div class='autorMessage'>${autor}:</div>
                                <div class='message'>${mensaje}</div>
                                <div class='hourMessage'>${hora}</div>
                            </div> `
            });

            mensajesCajaDOM.scroll({
                top: mensajesCajaDOM.scrollHeight,
                behavior: "smooth",
            });
            break;
    }

}