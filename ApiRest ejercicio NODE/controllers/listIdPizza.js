const {getPizzas} = require("../helper/db");

const listIdPizza = async(req,res) => {
    const pizzas =  getPizzas()
    res.writeHead(200, { "Content-type": "application/json" });
    const id = req.url.split('/')[2];
    let item = [{}]
    item = pizzas.filter(pizza => pizza.id == id)
    return res.end(JSON.stringify(item))
}


module.exports = listIdPizza