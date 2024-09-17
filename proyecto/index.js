/*const colors = require('colors')
console.log('hello'.green)
*/
const axios = require("axios").default;

axios
  .get("https://rickandmortyapi.com/api/character")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Inico");

let despedirse = function (nombre) {
  console.log("Adios " + nombre);
};

function saludar(nombre, callback) {
  console.log("Hola " + nombre);

  setTimeout(() => {
    callback(nombre);
  }, 0);
}

saludar("Juan", despedirse);

console.log("Aqui continuamos con el flujo");
