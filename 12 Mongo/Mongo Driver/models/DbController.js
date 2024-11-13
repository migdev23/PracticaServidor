const { MongoClient } = require('mongodb');


class DbController {

    constructor(urlMongoDB, nameDataBase, collectionDataBase) {
        this.clientReady = this.initClient(urlMongoDB, nameDataBase, collectionDataBase);
    }

    async initClient(urlMongoDB, nameDataBase, collectionDataBase) {
        try {

            this.client = new MongoClient(urlMongoDB);

            await this.client.connect();

            this.db = this.client.db(nameDataBase);

            this.collection = this.db.collection(collectionDataBase);

            return true;

        } catch (error) {

            console.log('Error al conectarse a la db')

            return false;

        }
    }

    successTryCatch(info) {
        return { status: true, info }
    }

    errorTryCatch(error) {
        console.log(`Error Controlado: ${error}`)
        return { status: false, info: null }
    }

    async tryCatch(callback) {
        if (await this.clientReady) {
            try {
                const info = await callback();
                return this.successTryCatch(info);
            } catch (error) {
                return this.errorTryCatch(error)
            }
        } else {
            return this.errorTryCatch('Error al conectarse a la db --TryCatch');
        }

    }

    readAllReg() {
        return this.tryCatch(async() => await this.collection.find({}).toArray())
    }

    readByIdReg(DEPART_no){
        return this.tryCatch(async() => await this.collection.find({DEPART_no}).toArray())
    }

    deleteByIdReg(DEPART_no){
        return this.tryCatch(async() =>  await this.collection.deleteOne({DEPART_no}))
    }

    updateByIDReg(DEPART_no, campo, value){
        return this.tryCatch(async() => await this.collection.updateOne({DEPART_no},{$set:{[campo]:value}}))
    }

    insertOneReg(DEPART_no, dnombre, loc){
        return this.tryCatch(async() => await this.collection.insertOne({DEPART_no, dnombre, loc}))
    }

    

}


module.exports = { DbController };