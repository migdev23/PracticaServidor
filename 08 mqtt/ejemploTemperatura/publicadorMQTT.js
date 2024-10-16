const mqtt = require('mqtt');

const client = mqtt.connect('ws://localhost:8080');

const sensorTemperatura = () => {
    return (Math.random() * 20 + 10).toFixed(2)
}

client.on('connect',()=>{
    console.log('Conectado al broker MQTT');
    setInterval(()=>{
        client.publish('sensor/temperatura', sensorTemperatura())
    }, 5000)
})


