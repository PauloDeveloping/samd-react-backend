const appdb = require('../config/appdb')

const Service = appdb.sequelize.define('svc_tbl', {

    svc_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    svc_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    svc_desc: {
        type: appdb.Sequelize.STRING
    },

    svc_deadline: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false
    },

    estatus: {
        type: appdb.Sequelize.STRING
    }
},

    {
        freezeTableName: true
    }
)

module.exports = Service
