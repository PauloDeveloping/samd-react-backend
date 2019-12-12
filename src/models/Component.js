const appdb = require('../config/appdb')

const compModel = appdb.sequelize.define('comp_tbl', {

    comp_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    comp_name: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    comp_desc: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    estatus: {
        type: appdb.Sequelize.STRING
    },

    course_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'COURSE_TBL',
            key: 'course_id'
        }
    }
},
    {
        freezeTableName: true
    }
)


module.exports = compModel
