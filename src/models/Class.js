const appdb = require('../config/appdb')

const Class = appdb.sequelize.define('class_tbl', {

    class_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    class_date: {
        type: appdb.Sequelize.DATE,
        allowNull: false
    },

    class_desc: {
        type: appdb.Sequelize.STRING
    },

    comp_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'COMP_TBL',
            key: 'comp_id'
        }
    }

},

    {
        freezeTableName: true
    })

module.exports = Class
