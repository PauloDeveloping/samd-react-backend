const RoleModel = require('../models/Role')

module.exports = {

    async index(req, res) {

        await RoleModel.findAll().then(data => {

            if(data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async show(req, res) {

        const { role_id } = req.params

        await RoleModel.findOne({where: {role_id}}).then(data => {

            if(data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retonro: 0})

            }

        })

    },

    async store(req, res) {

        const role = {
            role_name: req.body.role_name,
            role_desc: req.body.role_desc,
            role_payment: req.body.role_payment
        }

        await RoleModel.create(role).then(success => {
            
            if(success) {

                return res.json({retorno: 1})
            }

            else {

                return res.json({retorno: 0})

            }
            

        })

    },

    async update(req, res) {

        const role = {
            role_name: req.body.role_name,
            role_desc: req.body.role_desc,
            role_payment: req.body.role_payment
        }

        const { role_id } = req.body

        await RoleModel.update(role, {where: {role_id}})
        .then(success => {

            if (success == 1) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }
            

        })

    },

    async destroy(req, res) {

        const { role_id } = req.body

        await RoleModel.update({estatus: 'D'}, {where: {role_id}})
        .then(success => {

            if(success == 1) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }
            

        })

    },

    async restore(req, res) {

        const { role_id } = req.body

        await RoleModel.update({estatus: ''}, {where: {role_id}})
        .then(success => {

            if(success == 1) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })
        
    }

}