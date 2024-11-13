require('dotenv').config()
const { default: mongoose } = require("mongoose");
const uri = process.env.URI;

(async()=>{

    try {
        await mongoose.connect(uri);  
    } catch (error) {
        console.log('Error al conectar en la bd');
        return false
    } 

    console.log('conectado')

    const departSchema = new mongoose.Schema({
        DEPART_no:Number,
        dnombre:String,
        loc:String
    },
    {
        collection:"depart"
    })

    const Departamento = mongoose.model('depart', departSchema);

    const nuevoDepart = new Departamento({
        DEPART_no:444,
        dnombre:'Sector',
        loc:'Andalucia'
    });

    await nuevoDepart.save();
    
    const all = await Departamento.find({});
    
    console.log(all);

    const id = await Departamento.find({DEPART_no:10});
    console.log(id);
    
    await Departamento.updateMany({DEPART_no:444},{dnombre:'cccccccccccccccc'});
    
    await Departamento.deleteMany({DEPART_no:444});

})();