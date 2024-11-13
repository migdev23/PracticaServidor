const deleteOneById = async (req, res, dbController) => {
    const { status, info } = await dbController.deleteByIdReg(parseInt(req.url.split('/')[2]));

    if (status) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: true, info }))
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ result: false, info: 'Error al obtener el resultado --DeleteOne controller' }))
    }

}

module.exports = deleteOneById