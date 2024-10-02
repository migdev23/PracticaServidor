const listAllPizza = require("../controllers/listAllPizza")
const listIdPizza = require("../controllers/listIdPizza")

const routerGet = (req,res) => {
     if(req.url === '/item')  return listAllPizza(res)
     
     // /item/id
     if (req.url.split('/').length == 3 
        && !isNaN(req.url.split('/')[2]) 
        && req.url.split('/')[1] == 'item') return listIdPizza(req, res)
    

    res.writeHead(404, { "Content-type": "application/json" });
    return res.end('ERROR')

}


module.exports = {
    routerGet
}





