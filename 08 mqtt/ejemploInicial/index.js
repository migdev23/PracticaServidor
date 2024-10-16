const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect',()=>{
    console.log('Conectado al broker MQTT');

    client.subscribe('mi/tema',(err)=>{
        if(!err) client.publish('mi/tema','Hola, soy una publicacion')
    })

})

client.on('message', (topic, message) => {
    console.log(`${topic}:${message.toString()}`);
})


