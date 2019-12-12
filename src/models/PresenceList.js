const appdb = require('../config/appdb')

const PresenceList = appdb.sequelize.define('prsclist_tbl', {

    prsclist_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    prsclist_date: {
        type: appdb.Sequelize.DATE,
        allowNull: false
    },

    prsclist_block: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false
    },


    class_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'CLASS_TBL',
            key: 'class_id'
        }
    }

},

    {
        freezeTableName: true
    }
)

module.exports = PresenceList
