const appdb = require('../config/appdb')

const Employee = appdb.sequelize.define('empl_tbl', {

  empl_id: {
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

module.exports = Employee
