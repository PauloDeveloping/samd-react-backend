const appdb = require('../config/appdb')

const Address = appdb.sequelize.define('addr_tbl', {

    addr_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    addr_cep: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false
    },

    addr_name: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    addr_ngh: {
        type: appdb.Sequelize.STRING,
        allowNull: false
    },

    addr_city: {
        type: appdb.Sequelize.STRING,
        allowNull: false
    },

    addr_state: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    user_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'USER_TBL',
            key: 'user_id'
        }
    }

},

    {
        freezeTableName: true
    })

module.exports = Address
