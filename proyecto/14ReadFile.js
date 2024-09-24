const fsP = require("fs/promises");
const fs = require("fs");
const rl = require('readline')
const { Stream } = require("stream");

//fs.mkdir("carpeta")
// fs.existsSync(async () => {
//   await fsP.appendFile("./texto.md", " Autor Pepe");
//   const texto = await fs.readFile("./texto.md", "utf-8");
//   console.log(texto);
// });

// Stream
// fs.createReadStream(url, utf-8)
// once empieza
// on {data end}

// (async () => {

//   try {
    
//     if (!fs.existsSync("./config")) {

//       await fsP.mkdir("./config");

//     } else {

//       console.log("El directorio config existe");

//     }

//     await fsP.appendFile("./config/fichero.md", "Texto añadido");

//   } catch (error) {

//     console.log(error)

//   }

// })()

// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`${Math.round(used * 100) / 100} MB`);

// const stream = fs.createReadStream('./texto.md','utf-8')

// const rlI = rl.createInterface({
//     input: stream,
//     crlfDelay: Infinity,
// });

// rlI.once('line', ()=>{
//     console.log('empezando a leer lineas')
// })

// let count = 0

// rlI.on('line',(line)=>{
//     ++count
//     console.log(`${line.length}`)
// })

// rlI.on('close',()=>{
//     console.log(`Se ha acabado total: ${count}`)
// })



// stream.once('data',()=>{
//     console.log('empezando')
// })

// stream.on('data', (chunk) =>{
//     console.log("Chunk: " + "\n")
//     body += chunk
// })

// stream.on('end', ()=>{
//     console.log('Fin')
//     console.log(body.length)
// })


const interfaz = rl.createInterface(process.stdin, process.stdout);

interfaz.question('Como te llamas?', (respuesta) =>{
    const stream = fs.createWriteStream(`./${respuesta}.md`)

    interfaz.setPrompt('>')

    interfaz.prompt();

     interfaz.on('line',(linea)=>{
         if(linea == 'exit'){
             stream.close()
             interfaz.close()
         }else{
             stream.write(`${linea}`)
             interfaz.prompt();
         }
     })
 })

// interfaz.on('close',()=>{
//     console.log('Se ha terminado la interfaz')
// })

// const streamLectura = fs.createReadStream('./texto.md','utf-8')
// const streamEscritura = fs.createWriteStream('./replica.md')
// const interfaz = rl.createInterface({input:streamLectura, crlfDelay: Infinity})

// interfaz.on('line',(line)=>{
//     streamEscritura.write(line.toLocaleUpperCase())
// })

// interfaz.on('close',(line)=>{
    //console.log(('Se ha cerrado'))
// })

//higthWaterMark para camv¡biar al tamaño de chunk



// const processLineByLine = async() => {
//     const streamLectura = fs.createReadStream('./texto.md','utf-8')
//     const interfaz = rl.createInterface({input:streamLectura, crlfDelay: Infinity})

//    // for (const line of interfaz) console.log(`Line: ${line}`)
//     for await (const line of interfaz) console.log(`Line: ${line}`)
//     console.log('Hola')
// }
// processLineByLine();
//---------------------------------------------------------------
// async function* leerLineas (Stream) {
//     const interfaz = rl.createInterface({
//         input:Stream,
//         crlfDelay: Infinity
//     })

//     for await (const linea of interfaz) {
//         yield linea;
//     }
// }


// const procesarArchivo = async (ruta) => {
//     const stream = fs.createReadStream(ruta, {encoding:'utf8'})
//     const iteradorLineas = leerLineas(stream);

//     for await (const linea of iteradorLineas) {
//         console.log(linea)    
//     }
// }

// procesarArchivo('./texto.md')


// const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element)
// }

// console.log('FIN')

//-------------------------------------------------------------------------------

// const streamLectura = fs.createReadStream('./texto.md','utf-8')
// const streamEscritura = fs.createWriteStream('./replica.md')
// const interfaz = rl.createInterface({input:streamLectura, crlfDelay: Infinity})
// let l = 0;
// interfaz.on('line',(line)=>{
//      l++;
//      streamEscritura.write('linea: ' + l + ': ' + line.toLocaleUpperCase())
// })


// interfaz.on('close', () => {
//     console.log('Se ha cerrado')
// })

//-------------------------------------------------------------------------------------
// async function* procesarLectura () {
//     const streamLectura = fs.createReadStream('./texto.md','utf-8')
//     const interfaz = rl.createInterface({input:streamLectura, crlfDelay: Infinity})    

//     for await (const linea of interfaz) {
//         yield linea
//     }
// }

// (async() => {
    
//     const stremEscritura = fs.createWriteStream('./archivo.md', {flags: 'w'})
//     const iterator = procesarLectura();

//     for await (const linea of iterator) {
//         stremEscritura.write(linea)   
//     }

// })()

//------------------- BORRAR ARCHIVO
// fs.unlink('archivo.texto',(err) => {
//     console.log('Borrado')
// })

//-------------------- RENOMBRAR
// fs.rename('archivo.texto', 'NuevoNombre.txt',(err) => {
//     console.log('nombre actualziado')
// })












