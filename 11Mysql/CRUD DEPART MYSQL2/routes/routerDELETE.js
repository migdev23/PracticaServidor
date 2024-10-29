const routerDelete = async (req, res, dbController) => {
    if (req.url.split('/').length == 4
        && req.url.split('/')[1] == 'api'
        && req.url.split('/')[2] == 'deleteById'
        && !isNaN(req.url.split('/')[3])) {
        const id = req.url.split('/')[3];
        const {status} = await dbController.delete(id);
        if(status){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({info:'Elemento eliminado'}));
        }else{
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({info:'error'}));
        }
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({info:'error'}));
    }
};

module.exports = { routerDelete };
