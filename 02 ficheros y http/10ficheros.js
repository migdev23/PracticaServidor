const fs = require('fs');
// const files = fs.readdirSync('./ficheros');
// console.log(files[2])
// console.log('SYNC', files);

fs.readdir("./ficheros",(err, data)=>{
    console.log('ASYNC', data)
})
