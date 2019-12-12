const appdb = require('../config/appdb')

const Notification = appdb.sequelize.define('ntf_tbl', {

    ntf_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    ntf_title:{
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    ntf_content: {
        type: appdb.Sequelize.TEXT,
        allowNull: false,
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

module.exports = Notification
