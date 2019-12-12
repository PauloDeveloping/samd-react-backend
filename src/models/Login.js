const appdb = require('../config/appdb')

const Login = appdb.sequelize.define('login_tbl', {

    login_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    passwd: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    usertype: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    estatus: {
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
        freezeTableName: true
    }
)

module.exports = Login
