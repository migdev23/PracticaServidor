const { MongoClient } = require('mongodb');

const dbController = () => {
    return new Promise(async(resolve, reject) => {
        const url = 'mongodb://localhost:27017/';
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db('empledepart');
            const collection = db.collection('depart');
            resolve([true, collection]);
        } catch (error) {
            console.log('Error al iniciar la db');
            reject([false, null])
        }
    })
}

module.exports = {dbController}
