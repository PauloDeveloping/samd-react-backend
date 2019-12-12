const appdb = require('../config/appdb')

const courseModel = appdb.sequelize.define('course_tbl', {

    course_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    course_name: {
        type: appdb.Sequelize.STRING,
        unique: true
    },

    course_desc: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    course_hours: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false,
    },

    semestries: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false,
    },

    market: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    estatus: {
        type: appdb.Sequelize.STRING
    },

    eixotec_fk: {
        type: appdb.Sequelize.INTEGER,
        references: {
            model: 'EIXOTEC_TBL',
            key: 'eixotec_id'
        }
    }
},

    {
        freezeTableName: true
    }
)

module.exports = courseModel
