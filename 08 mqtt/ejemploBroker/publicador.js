const mqtt = require('mqtt');
console.log('PUBLICADOR')
const client = mqtt.connect('mqtt://localhost:1883');

const sensorTemperatura = () => {
    return (Math.random() * 20 + 10).toFixed(2)
}

client.on('connect',()=>{
    console.log('Conectado al broker MQTT');
    setInterval(()=>{
        client.publish('sensor/temperatura', sensorTemperatura())
    }, 5000)
})


