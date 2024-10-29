import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'empledepart'
});

try {
    const [rows, fields] = await connection.execute('SELECT * FROM emple WHERE emple_no = ?', [7839]);
    console.log(rows);
} catch (error) {
    console.error('Ha ocurrido:',error)
}finally{
    await connection.end();
}