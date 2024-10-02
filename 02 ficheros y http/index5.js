const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", [], (req, res) => {
  return res.json({
    query: req.query,
    msg: "METODO GET",
  });
});

app.post("/", [], (req, res) => {
  return res.json({
    ...req.body,
    headers: req.headers,
    msg: "METODO POST",
  });
});

app.put("/", [], (req, res) => {
  return res.json({
    msg: "METODO PUT",
  });
});

app.delete("/", [], (req, res) => {
  return res.json({
    msg: "METODO DELETE",
  });
});

app.listen(9873);

// GET SIMPLE
axios
  .get("http://localhost:9873/")
  .then((res) => {
    console.log("----------------------------------------------------------");
    console.log("PETICION GET SIN PARAMETROS");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

//QUERY GET
axios
  .get("http://localhost:9873/", {
    params: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  })
  .then((res) => {
    console.log("PETICIÓN GET CON PARÁMETROS EN LA URL");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

//OTRA FORMA QUERY GET
axios
  .get("http://localhost:9873/?firstName='Raul'&lastName='pepe'")
  .then((res) => {
    console.log("PETICIÓN GET CON PARÁMETROS EN LA URL SEGUNDA FORMA");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

//METODO POST SIN CUERPO
axios
  .post("http://localhost:9873/")
  .then((res) => {
    console.log("PETICIÓN POST SIN CUERPO");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

//METODO POST CON BODY
axios
  .post("http://localhost:9873/", { firstName: "Alvaro" })
  .then((res) => {
    console.log("PETICIÓN POST CON CUERPO");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

// METODO POST CON BODY Y CON HEADERS
axios
  .post(
    "http://localhost:9873/",
    { firstName: "Alvaro" },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT",
      },
    }
  )
  .then((res) => {
    console.log("PETICIÓN POST CON CUERPO Y HEADERS");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });

//METODO PUT
axios
  .put("http://localhost:9873/")
  .then((res) => {
    console.log("PETICIÓN PUT");
    console.log(res.data);
    console.log("----------------------------------------------------------");
  })
  .catch((err) => {
    console.log(err);
  });


  
//METODO DELETE
axios
.delete("http://localhost:9873/")
.then((res) => {
  console.log("PETICIÓN DELETE");
  console.log(res.data);
  console.log("----------------------------------------------------------");
})
.catch((err) => {
  console.log(err);
});


//Otra forma de gestionar axios
(async()=>{
   const {data} = await axios.get("http://localhost:9873/")
   console.log(data)
})()

 