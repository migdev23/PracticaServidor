const { getPizzas, setPizzas } = require("../helper/db");
const createOnePizza = (req, res) => {
  const pizzas = getPizzas();
  req.body.id = pizzas[pizzas.length - 1].id + 1;
  pizzas.push(req.body);
  setPizzas(pizzas);
  res.writeHead(201, { "Content-type": "application/json" });
  return res.end(JSON.stringify(req.body));
};

module.exports = createOnePizza;
