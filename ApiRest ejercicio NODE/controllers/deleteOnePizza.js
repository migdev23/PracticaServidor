
const { getPizzas, setPizzas } = require("../helper/db");
const deleteOnePizza = (req, res) => {
  const id = req.url.split("/")[2];
  const pizzas = getPizzas();
  const newListPizza = pizzas.filter((pizza) => pizza.id != id);
  setPizzas(newListPizza);
  res.writeHead(200, { "Content-type": "application/json" });
  return res.end(JSON.stringify(newListPizza));
};

module.exports = deleteOnePizza;
