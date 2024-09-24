process.on('exit',()=>{
    console.log('Has salido el programa')
})

process.on('uncaughtException', (err)=>{
    console.log('ERR', err)
})

console.log('hola')
console.log(__dirname)
console.log(__filename)