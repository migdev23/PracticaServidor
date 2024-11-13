const insertOneReg = require("../controllers/insertOneReg");

const routerPost = (req, res, dbController) => {
    const { url } = req;
    if (url == '/api/') {
        return insertOneReg(req, res, dbController);
    }
    else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ msg: "not found 404" }));
    }
};

module.exports = routerPost;
