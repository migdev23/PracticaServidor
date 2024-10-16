const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
console.log('SUSCRIPTOR')
client.on('connect', ()=>{
    client.subscribe('sensor/temperatura')
})

client.on('message', (topic, message) => {
    console.log(`${topic}:${message.toString()}`);
});


