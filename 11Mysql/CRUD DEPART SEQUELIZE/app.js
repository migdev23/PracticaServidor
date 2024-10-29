const Sequelize = require("sequelize");
const DepartModel = require("./models/Depart");

(async () => {
    const accessDataBase = new Sequelize('empledepart', 'root', '', {host: 'localhost', dialect: 'mysql'});

    try { await accessDataBase.authenticate()} 
    catch (error) {
        console.log('Fallo al autenticar en la bd');
        return false
    }

    const depart = new DepartModel(accessDataBase);
    
    const [statusAllReg, infoAllReg] = await depart.allReg();
    console.log(infoAllReg);

    const [statusByIdReg, infoByIdReg] = await depart.byIdReg(10);
    console.log(infoByIdReg);

    const [statusCreateReg, infoCreateReg] = await depart.createReg(
        666,
        "Jupiter",
        "Valdepenas"
    );
    console.log(infoCreateReg);

    const [statusUpdateReg, infoUpdateReg] = await depart.updateReg(
        666,
        "dnombre",
        "Banco"
    );
    console.log(infoUpdateReg, statusUpdateReg);

    const [statusDeleteReg, infoDeleteReg] = await depart.deleteReg(666);
    console.log(infoDeleteReg, statusDeleteReg);
})();
