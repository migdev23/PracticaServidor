const fs = require('fs');
const path = require('path');
const db = path.join(__dirname, '../db/index.json');

const existIdPizza = (id) => {
  let exist = false;
  const pizzas = JSON.parse(fs.readFileSync(db, 'utf-8'));
  let item = pizzas.filter((pizza) => pizza.id == id);
  if (item.length == 1) exist=true;
  return exist;
}

const getPizzas = () => {
  const pizzas = fs.readFileSync(db, 'utf-8');
  return JSON.parse(pizzas);
}

const setPizzas = (newListPizza) => {
  newListPizza = newListPizza.sort((a, b) => a.id - b.id);
  fs.writeFileSync(db, JSON.stringify(newListPizza))
}

module.exports = {getPizzas, setPizzas,  existIdPizza};