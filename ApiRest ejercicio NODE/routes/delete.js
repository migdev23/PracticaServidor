const deleteOnePizza = require("../controllers/deleteOnePizza");
const {existIdPizza} = require('../helper/db')
const routerDelete = (req,res) => {
    // /item/id
    if (req.url.split('/').length == 3 
       && !isNaN(req.url.split('/')[2]) 
       && req.url.split('/')[1] == 'item'
       && existIdPizza(req.url.split('/')[2])) return deleteOnePizza(req, res)
   

   res.writeHead(404, { "Content-type": "application/json" });
   return res.end('ERROR')

}

module.exports = {routerDelete}