const appdb = require('../config/appdb')

const Event = appdb.sequelize.define('event_tbl', {

    event_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    event_title: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    event_desc: {
        type: appdb.Sequelize.STRING
    },

    event_start: {
        type: appdb.Sequelize.DATE,
        allowNull: false
    },

    event_end: {
        type: appdb.Sequelize.DATE,
        allowNull: false
    },

    inst_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'INST_TBL',
            key: 'inst_id'
        }
    }

},

    {
        freezeTableName: true
    }
)

module.exports = Event
