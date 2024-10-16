const { getPizzas, setPizzas } = require("../helper/db");

const editPizza = async (req, res) => {
  const id = req.url.split("/")[2];
  const pizzas = getPizzas();
  let pizza = pizzas.filter((pizza) => pizza.id == id)[0]; 

  for (const key in pizza) {
    if (key in req.body) {
      pizza[key] = req.body[key];
    }
  }

  const newListPizza = pizzas.filter((pizza) => pizza.id != id); 
  newListPizza.push(pizza);
  setPizzas(newListPizza);

  res.writeHead(200, { "Content-type": "application/json" });
  return res.end(JSON.stringify(pizza));
};

module.exports = editPizza;
