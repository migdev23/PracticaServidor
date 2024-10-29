const { INTEGER, STRING, Model } = require("sequelize");
class DepartModel {
    constructor(accesDB) {
        this.init(accesDB);
    }

    init(accesDB) {
        this.Depart = accesDB.define(
            "depart",
            {
                depart_no: {
                    type: INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                dnombre: {
                    type: STRING,
                    allowNull: true,
                },

                loc: {
                    type: STRING,
                    allowNull: true,
                },
            },
            { freezeTableName: true, timestamps: false }
        );

        // this.Depart.sync();
    }

    async tryCatch(callback) {
        try {
            const info = await callback();
            return this.successReturn(info);
        } catch (error) {
            return this.errorReturn(error);
        }
    }

    errorReturn(errorConsult) {
        console.log(errorConsult);
        return [false, null];
    }

    successReturn(info) {
        return [true, info];
    }

    allReg() {
        return this.tryCatch(() => this.Depart.findAll());
    }

    byIdReg(id) {
        return this.tryCatch(() =>
            this.Depart.findOne({ where: { depart_no: id } })
        );
    }

    createReg(depart_no, dnombre, loc) {
        return this.tryCatch(() => this.Depart.create({ depart_no, dnombre, loc }));
    }

    deleteReg(depart_no) {
        return this.tryCatch(() => this.Depart.destroy({ where: { depart_no } }));
    }

    updateReg(depart_no, campo, value) {
        return this.tryCatch(() => {
            this.Depart.update(
                { [campo]: value }, // {[campo]: value}, campo dinámico
                { where: { depart_no } }
            );
        });
    }
}

module.exports = DepartModel;
