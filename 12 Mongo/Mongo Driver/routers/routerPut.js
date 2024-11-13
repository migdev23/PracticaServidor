const updateOneById = require("../controllers/updateOneById");

const routerPut = (req, res, dbController) => {
    const { url } = req;
    if (/^\/api\/[0-9]+$/.test(url)) {
        return updateOneById(req, res, dbController);
    }
    else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ msg: "not found 404" }));
    }
};

module.exports = routerPut;
