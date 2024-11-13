const readByIdReg = async (req, res, dbController) => {
    const { status, info } = await dbController.readByIdReg(parseInt(req.url.split('/')[2]));

    if (status) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: true, info }))
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --ReadAllReg' }))
    }

}

module.exports = readByIdReg