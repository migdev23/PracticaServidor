const createReqBody = (req) => {
  return new Promise((resolve, reject) => {
    try {
      req.body = "";

      req.on("data", (chunk) => {
        req.body += chunk;
      });

      req.on("end", () => {
        req.body = req.body === "" ? {} : JSON.parse(req.body);
        resolve();
      });
    } catch (error) {
      console.log('ERROR AL CREAR REQBODY')
      reject();
    }
  });
};

module.exports = { createReqBody };
