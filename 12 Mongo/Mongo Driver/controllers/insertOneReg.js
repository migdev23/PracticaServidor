const insertOneReg =  async(req, res, dbController) => {
    const { DEPART_no = "", dnombre = "", loc = "" } = req.body

    if (DEPART_no == "" || dnombre == "" || loc == "") {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --INSERT ONE REG CONTROLLER  1' }))
    }

    const { status, info } = await dbController.insertOneReg(DEPART_no, dnombre, loc);

    if (status) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: true, info}))
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --INSERT ONE REG CONTROLLER 2' }))
    }

}

module.exports = insertOneReg