const appdb = require('../config/appdb')

const Document = appdb.sequelize.define('doc_tbl', {

    doc_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    doc_name: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    doc_desc: {
        type: appdb.Sequelize.STRING,
    },

    doc_file: {
        type: appdb.Sequelize.INTEGER,
        unique: true,
        allowNull: false
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

module.exports = Document
