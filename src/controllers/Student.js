const StudentModel = require('../models/Student')
const UserModel = require('../models/User')



StudentModel.belongsTo(UserModel, {
    foreignKey: 'user_fk'
})

/*StudentModel.hasOne(UserModel, {
    foreignKey: 'user_id'
})*/

module.exports = {

    async index(req, res) {

        await StudentModel.findAll({include:[UserModel]}).then(data => {

            if(data) {
                return res.json(data)
            }

            else {
                return res.json(0)
            }

        })

    },

    async show(req, res) {

    },

    async store(req, res) {

    },

    async update(req, res) {

    },

    async destroy(req, res) {

    },

    async restore(req, res) {
        
    }

}