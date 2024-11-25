const mongoose = require('mongoose');
const imgSchema = new mongoose.Schema({
    url:String
});

const Img = mongoose.model('img', imgSchema);
module.exports = Img;