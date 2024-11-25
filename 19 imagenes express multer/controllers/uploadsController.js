const multer = require("multer");
const Img = require("../models/imagenes");
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, (Date.now() + file.originalname))
    }
})

const upload = multer({storage});

const uploadFile = async (req, res) => {
    try {
        const imgNew = new Img({
            url:req.file.path
        });
        await imgNew.save();
        return res.send('Archivo subido con exito');
    } catch (error) {
        return res.send({
            message: 'fallo',
        })
    }
}

module.exports = uploadFile;