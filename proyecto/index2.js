/*const colors = require('colors')
console.log('hello'.green)
*/
const axios = require("axios").default;

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

const promesa = () => {
  return new Promise((resolve, reject) => {
    try {
      axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      reject("ERR");
    }
  });
};

promesa()
  .then((res) => {
    console.log(res);
    saludar("Juan", despedirse);
  })
  .catch((err) => {
    console.log(err);
  });
