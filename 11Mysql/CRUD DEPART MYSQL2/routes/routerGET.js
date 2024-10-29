const fs = require('fs');
const path = require('path');

const routerGet = async (req, res, dbController) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, '../public/index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return fs.createReadStream(filePath).pipe(res);
    } else if (req.url === '/api/readAll') {
        let {status, info} = await dbController.readAll();

        if(status){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(info[0]));
        }else{
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({info:'error'}));
        }

      
    } else if (req.url.split('/').length == 4
        && req.url.split('/')[1] == 'api'
        && req.url.split('/')[2] == 'readById'
        && !isNaN(req.url.split('/')[3])) {

        const id = req.url.split('/')[3];

        let {status, info} = await dbController.readById(id);

        if(status){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(info[0]));
        }else{
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({info:'error'}));
        }
        
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({info:'error'}));
    }
};

module.exports = { routerGet };
