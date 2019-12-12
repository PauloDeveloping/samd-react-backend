const appdb = require('../config/appdb')

const userModel = appdb.sequelize.define('user_tbl', {

    user_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    user_rm: {
        type: appdb.Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },

    user_full_name: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    user_birth_date: {
        type: appdb.Sequelize.DATEONLY,
        allowNull: false,
    },

    user_cpf: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    user_rg: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    user_genre: {
        type: appdb.Sequelize.CHAR,
        allowNull: false,
    },

    user_photo: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    user_email_pers: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    user_email_inst: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    user_cel: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    user_tel: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    estatus: {
        type: appdb.Sequelize.STRING
    },

    createdAt: {
        type: appdb.Sequelize.DATE
    },

    updatedAt: {
        type: appdb.Sequelize.DATE
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

module.exports = userModel
