const appdb = require('../config/appdb')

const Teacher = appdb.sequelize.define('tchr_tbl', {

  tchr_id: {
    type: appdb.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
})

module.exports = Teacher
