const appdb = require('../config/appdb')

const instModel = appdb.sequelize.define('inst_tbl', {

    inst_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    inst_cod: {
        type: appdb.Sequelize.INTEGER,
        unique: true
    },

    inst_name: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    inst_desc: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    inst_tel: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    estatus: {
        type: appdb.Sequelize.STRING
    }

},
    {
        freezeTableName: true
    }
)

module.exports = instModel
