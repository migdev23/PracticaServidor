const {getPizzas} = require('../helper/db');
const listAllPizza = (res) => {
    const pizzas =  getPizzas()
    res.writeHead(200, { "Content-type": "application/json" });
    return res.end(JSON.stringify(pizzas))
}

module.exports = listAllPizza;