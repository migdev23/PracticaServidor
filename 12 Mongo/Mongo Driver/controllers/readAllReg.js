const readAllReg = async(req, res, dbController) => {

    const {status, info} = await dbController.readAllReg();

    if(status){
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify({result:true, info}))
    }else{
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({result:false, info:'Error al obtener el resultado --ReadAllReg'}))
    }

}

module.exports = readAllReg