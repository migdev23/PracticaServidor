const mysql = require("mysql2/promise");
class dbObject {
    constructor() {
        this.connection = null;
    }

    async connectiondb() {
        try {
            this.connection = await mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "empledepart",
            });
            return true
        } catch (error) {
            console.log('Error al conectarse a la bd MYSQL XAMPP')
            return false
        }
    }

    async create(depart_no, dnombre, loc) {
        try {
            const consultation = "INSERT INTO DEPART (DEPART_no, dnombre, loc) VALUES (?, ?, ?)";
            await this.connection.execute(consultation, [depart_no, dnombre, loc]);
            return {status:true}
        } catch (error) {
            return {status:false}
        }
    }

    async readAll() {

        let status = false;

        try {
            const consultation = "SELECT * FROM depart";
            const [rows, fields] = await this.connection.execute(consultation);
            status = true;
            return { status, info: [rows, fields] };
        } catch (error) {
            console.log('ERROR READ ALL')
        }

        return { status, info: null };
    }

    async readById(depart_no) {
        const existeDepart = await this.existDepart_no(depart_no);
        let status = false;

        if (existeDepart) {
            try {
                const consultation = "SELECT * FROM depart WHERE depart_no = ?";
                const [rows, fields] = await this.connection.execute(consultation, [depart_no]);
                status = true;
                return { status, info: [rows, fields] };
            } catch (error) {
                status = false;
            }
        }

        return { status, info: null };
    }

    async update(depart_no, campo, valor) {
        const existeDepart = await this.existDepart_no(depart_no);

        let status = false;

        if (existeDepart) {
            try {
                const consultation = `UPDATE depart SET ${campo} = ? WHERE depart_no=?;`;
                await this.connection.execute(consultation, [valor, depart_no]);
                status = true;
            } catch (error) {
                status = false;
            }
        }

        return { status, info: null };
    }

    async delete(depart_no) {

        const existeDepart = await this.existDepart_no(depart_no);

        let status = false;

        if (existeDepart) {
            try {
                const consultation = `DELETE FROM depart WHERE depart_no = ? `;
                await this.connection.execute(consultation, [depart_no]);
                status = true;
            } catch (error) {
                status = false;
            }
        }

        return { status, info: null };
    }

    async existDepart_no(depart_no) {

        try {
            const consultation = "SELECT * FROM depart WHERE depart_no = ?";
            const [rows, fields] = await this.connection.execute(consultation, [depart_no]);
            if (rows.length > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false
        }
    }

    async closeConnection() {
        await this.connection.end();
    }
}

module.exports = dbObject;
