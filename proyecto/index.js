/*const colors = require('colors')
console.log('hello'.green)
*/
const axios = require("axios").default;

console.log("Inico");

let despedirse = function (nombre) {
  console.log("Adios " + nombre);
};

function saludar(nombre, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola " + nombre);
      callback(nombre);
      resolve();
    }, 0);
  });
}

axios
  .get("https://rickandmortyapi.com/api/character")
  .then((res) => {
    console.log(res);
    saludar("Juan", despedirse)
      .then((res) => {
        console.log("Aqui continuamos con el flujo");
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
