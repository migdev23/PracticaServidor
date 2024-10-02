const  fsPromise = require("fs/promises")

fsPromise.readdir("./ficheros")
.then(files => console.log(files))
.catch(err => console.log(err));

(async()=>{
   const filesP = await fsPromise.readdir("./ficheros")
   console.log(filesP)
})()