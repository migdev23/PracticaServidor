const editPizza = require("../controllers/editPizza");
const {existIdPizza} = require('../helper/db')
const routerPatch = (req, res) => {
    if(req.url.split('/').length == 3 
        && !isNaN(req.url.split('/')[2]) 
        && req.url.split('/')[1] == 'item'
        && existIdPizza(req.url.split('/')[2])) return editPizza(req,res)
    
     
    res.writeHead(404, { "Content-type": "application/json" });
    return res.end('ERROR')
};

module.exports = {
    routerPatch,
};
