const appdb = require('../config/appdb')

const Lession = appdb.sequelize.define('lession_tbl', {

    lession_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    lession_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    lession_desc: {
        type: appdb.Sequelize.STRING,
        allowNull: false
    },

    lession_size: {
        type: appdb.Sequelize.STRING,
        allowNull: false
    },

    lession_ext: {
        type: appdb.Sequelize.STRING,
        allowNull: false,
    },

    lession_file: {
        type: appdb.Sequelize.STRING
    },

    estatus: {
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
    }
)

module.exports = Lession
