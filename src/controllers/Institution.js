const InstitutionModel = require('../models/Institution')

module.exports = {
    async store(req, res) {
        
        const institution = {
            inst_cod: req.body.inst_cod,
            inst_name: req.body.inst_name,
            inst_desc: req.body.inst_desc,
            inst_tel: req.body.inst_tel   
        }

        await InstitutionModel.create(institution).then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }
        })
    },

    async show(req, res) {

        const { inst_id } = req.params

        await InstitutionModel.findOne({where: {inst_id}}).then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }
            
        })

    },

    async index(req, res) {

        await InstitutionModel.findAll().then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }
            
        })

    },

    async update(req, res) {

        const institution = {
            inst_cod: req.body.inst_cod,
            inst_name: req.body.inst_name,
            inst_desc: req.body.inst_desc,
            inst_tel: req.body.inst_tel   
        }

        const { inst_id } = req.body

        await InstitutionModel.update(institution, {where: {inst_id}})
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

        const { inst_id } = req.body

        await InstitutionModel.update({estatus: 'D'}, {where: {inst_id}})
        .then(success => {

            if (success == 1) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})
                
            }

        })

    },

    async restore(req, res) {

        const { inst_id } = req.body

        await InstitutionModel.update({estatus: ''}, {where: {inst_id}})
        .then(success => {

            if (success == 1) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})
                
            }

        })

    }
}