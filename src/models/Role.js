const appdb = require('../config/appdb')

const Role = appdb.sequelize.define('role_tbl', {

    role_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    role_desc: {
        type: appdb.Sequelize.STRING,
    },

    role_payment: {
        type: appdb.Sequelize.FLOAT
    },

    estatus: {
        type: appdb.Sequelize.STRING
    }
},

    {
        freezeTableName: true
    }
)

module.exports = Role
