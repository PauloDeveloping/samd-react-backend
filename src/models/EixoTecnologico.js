const appdb = require('../config/appdb')

const Eixotec = appdb.sequelize.define('eixotec_tbl', {

    eixotec_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    eixotec_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    eixotec_desc: {
        type: appdb.Sequelize.STRING
    },

    estatus: {
        type: appdb.Sequelize.STRING
    }

},

    {
        freezeTableName: true
    }
)

module.exports = Eixotec
