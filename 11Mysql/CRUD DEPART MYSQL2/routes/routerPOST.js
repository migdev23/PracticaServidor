const routerPost = async (req, res, dbController) => {
    if (req.url == '/api/createById/') {
       const {status} = await dbController.create(req.body.depart_no, req.body.dnombre, req.body.loc);
       if(status){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({'info':'Creado correctamente'}));
       }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({info:'error'}));
       }
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({info:'error'}));
    }
};

module.exports = { routerPost };
