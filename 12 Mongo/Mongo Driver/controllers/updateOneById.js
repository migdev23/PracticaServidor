const updateOneById =  async(req, res, dbController) => {
    const {campo = "", value = "" } = req.body

    if (campo == "" || value == "") {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --UPDATE CONTROLLER  1' }))
    }

    const { status, info } = await dbController.updateByIDReg(parseInt(req.url.split('/')[2]), campo, value);

    if (status) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: true, info}))
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --UPDATE CONTROLLER 2' }))
    }

}

module.exports = updateOneById