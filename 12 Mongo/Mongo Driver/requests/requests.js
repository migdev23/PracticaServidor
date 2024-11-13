const axios = require('axios');

(async () => {
    console.log('----------------READALL---------------------')
    const { data: dataGetAll } = await axios.get('http://localhost:3000/api/');
    console.log(dataGetAll)

    console.log('----------------READBYID---------------------')
    const { data: dataGetById } = await axios.get('http://localhost:3000/api/10');
    console.log(dataGetById)


    console.log('----------------INSERTONE---------------------')
    const { data: dataInsertOne } = await axios.post('http://localhost:3000/api/', {
        "DEPART_no": 9983,
        "dnombre": "Susiana",
        "loc": "MadagasCode"
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(dataInsertOne);

    console.log('----------------PUTONE---------------------')
    const { data: dataUpdateOne } = await axios.put('http://localhost:3000/api/9983', {
        "campo": "dnombre",
        "value": "MadagasCode"
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(dataUpdateOne);

    console.log('----------------DELETEONE---------------------')
    const { data: dataDeleteOne } = await axios.delete('http://localhost:3000/api/9983');
    console.log(dataDeleteOne);
    
})()