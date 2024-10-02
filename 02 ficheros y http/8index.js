function getParam(param) {
    const index = process.argv.indexOf(param)
    return index === -1 ? null : process.argv[index+1]
}

const nombre = getParam('--nombre')
const edad = getParam('--edad')

if(nombre && edad){
    console.log(nombre, edad)
}else{
    console.log('Faltan parametros')
}