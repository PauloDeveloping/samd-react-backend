const appdb = require('../config/appdb')

const Article = appdb.sequelize.define('artcl_tbl', {

    artcl_id: {
        type: appdb.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    artcl_title: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    artcl_content: {
        type: appdb.Sequelize.STRING
    },

    artcl_slug: {
        type: appdb.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    estatus: {
        type: appdb.Sequelize.STRING
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
    })

module.exports = Article
