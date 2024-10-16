const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', ()=>{
    client.subscribe('dwes/2daw')
})

client.on('message', (topic, message) => {
    console.log(`${topic}:${message.toString()}`);
});


