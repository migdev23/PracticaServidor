var { Router } = require("express");
var router = new Router();
var path = require("path");

router.get("/", (req, res) => {
    return res.send("LISTADO PRODUCTOS");
});

router.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/formulario.html"));
});

router.post("/create", (req, res) => {
    const {nombre, precio} = req.body;
    return res.send(`SE HA RECOGIDO LA INFORMACION ${nombre} ${precio}`);
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return next();
    }
    return res.send(`${id}`);
});

router.get("/*", (req, res) => {
    return res.send(`NOT FOUND :)`);
});

module.exports = router;