const appdb = require('../config/appdb')

const Activity = appdb.sequelize.define('actvt_tbl', {

    actvt_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    actvt_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    actvt_desc: {
        type: appdb.Sequelize.STRING,
        allowNull: false
    },

    starting_date: {
        type: appdb.Sequelize.DATE,
        allowNull: false
    },

    ending_date: {
        type: appdb.Sequelize.DATE,
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
    })

module.exports = Activity
