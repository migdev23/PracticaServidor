const Sequelize = require('sequelize');
const DepartModel = require('./models/Depart');
(async()=>{

    const accessDataBase = new Sequelize('empledepart', 'root', '',{
        host:'localhost',
        dialect:'mysql'
    })

    const depart = new DepartModel(accessDataBase);
    
    const [statusAllReg, infoAllReg] = await depart.allReg();
    console.log(infoAllReg);

    const [statusByIdReg, infoByIdReg] = await depart.byIdReg(10);
    console.log(infoByIdReg);

    const [statusCreateReg, infoCreateReg] = await depart.createReg(666, 'Jupiter', 'Valdepenas')
    console.log(infoCreateReg);

    const [statusUpdateReg, infoUpdateReg] = await depart.updateReg(666, 'dnombre', 'Cristo');
    console.log(infoUpdateReg, statusUpdateReg);

    const [statusDeleteReg, infoDeleteReg] = await depart.deleteReg(666);
    console.log(infoDeleteReg, statusDeleteReg);
    
})();