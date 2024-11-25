require('dotenv').config();
const { default: mongoose } = require('mongoose');
mongoose.connect(process.env.MONGOURI)
  .then(() => {
    const Server = require('./models/server');
    const server = new Server();
    server.listen();
  })
  .catch(err => console.log('Problema al iniciar la bd'));
