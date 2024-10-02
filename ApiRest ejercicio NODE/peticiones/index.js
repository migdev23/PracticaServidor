const axios = require('axios')

axios.get('http://localhost:3000/item').then(({data})=>{
    console.log('Listar todas las pizzas')
    console.log(data)
    console.log("----------------------------------------------------------");
})

axios.get('http://localhost:3000/item/2').then(({data})=>{
    console.log('Listar por ID la pizza')
    console.log(data)
    console.log("----------------------------------------------------------");
})

axios
  .post("http://localhost:3000/item", { name:"peperoni" })
  .then(({data}) => {
    console.log("Crear pizza");
    console.log(data);
    console.log("----------------------------------------------------------");
  })

axios
  .patch("http://localhost:3000/item/2", { name:"NombreDistinto" })
  .then(({data}) => {
    console.log("Actualizar nombre");
    console.log(data);
    console.log("----------------------------------------------------------");
  })

  axios
  .delete("http://localhost:3000/item/2")
  .then(({data}) => {
    console.log("Eliminar Pizza");
    console.log(data);
    console.log("----------------------------------------------------------");
  })