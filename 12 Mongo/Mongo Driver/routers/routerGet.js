const readAllReg = require("../controllers/readAllReg");
const readByIdReg = require("../controllers/readByIdReg");

const routerGet = (req, res, dbController) => {
    const { url } = req;
    if (url == '/api/') {
        return readAllReg(req, res, dbController);
    }
    else if (/^\/api\/[0-9]+$/.test(url)) {
        return readByIdReg(req, res, dbController);
    }
    else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ msg: "not found 404" }));
    }
};

module.exports = routerGet;
