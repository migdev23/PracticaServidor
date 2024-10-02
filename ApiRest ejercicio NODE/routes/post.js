const createOnePizza = require("../controllers/createOnePizzaDB");
const routerPost = (req, res) => {
  if (req.url === "/item") return createOnePizza(req, res);

  res.writeHead(404, { "Content-type": "application/json" });
  return res.end("ERROR");
};

module.exports = {
  routerPost,
};
