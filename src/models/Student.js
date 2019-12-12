const appdb = require('../config/appdb')

const Student = appdb.sequelize.define('student_tbl', {

    student_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    student_answ: {
        type: appdb.Sequelize.STRING
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
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = Student
