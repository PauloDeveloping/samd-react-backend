const ServiceModel = require('../models/Service')

module.exports = {

    async index(req, res) {

        await ServiceModel.findAll().then(data => {

            if(data) {
                return res.json(data)
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async show(req, res) {
        
        const { svc_id } = req.params

        await ServiceModel.findOne({where: {svc_id}}).then(data => {

            if (data) {

                return res.json(data)

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async store(req, res) {

        const service = {
            svc_name: req.body.svc_name,
            svc_desc: req.body.svc_desc,
            svc_deadline: req.body.svc_deadline
        }

        await ServiceModel.create(service).then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async update(req, res) {

        const service = {
            svc_name: req.body.svc_name,
            svc_desc: req.body.svc_desc,
            svc_deadline: req.body.svc_deadline
        }

        const { svc_id } = req.body

        await ServiceModel.update(service, {where: {svc_id}}).then(success => {

            console.log('success:', req.body)

            if (success == 1) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async destroy(req, res) {

        const { svc_id } = req.body

        await ServiceModel.update({estatus: 'D'}, {where: {svc_id}})
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
        
        const { svc_id } = req.body

        await ServiceModel.update({estatus: ''}, {where: {svc_id}})
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