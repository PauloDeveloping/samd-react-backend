const ActivityModel = require('../models/Activity')

module.exports = {

    async index(req, res) {

        await ActivityModel.findAll().then(data => {

            if(data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }

        })
        .catch(err => {
            console.log('Erro na ActivityModel', err)
        })

    },

    async show(req, res) {

        const { activity_id } = req.params

        await ActivityModel.findById(activity_id).then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }

        })
        .catch(err => {
            console.log('Erro na ActivityModel', err)
        })

    },

    async store(req, res) {

        const {actvt_name, actvt_desc, starting_date, ending_date} = req.body

        await ActivityModel.create(actvt_name, actvt_desc, starting_date, ending_date)
        .then(success => {

            if(success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })
        .catch(err => {
            console.log('Erro na ActivityModel', err)
        })

    },

    async update(req, res) {

        const object = {

            actvt_name,
            actvt_desc,
            starting_date,
            ending_date,
            actvt_id

        }

        const {} = req.body
        await ActivityModel.update(object, {where: actvt_id})
        .then(success => {

            if (success) {
                return res.json({retorno: '1'})
            }
            
        })
        .catch(err => {
            
            console.log('Erro na ActivityModel', err)

        })

    },

    async destroy(req, res) {

        const {actvt_id} = req.body;
        await ActivityModel.update({estatus: 'D'}, {where: actvt_id})
        .then(success => {

            if (success) {

                return res.json({retorno: '1'})

            }
            
        })
        .catch(err => {

            console.log('Erro na ActivityModel', err)

        })

    },

    async restore(req, res) {
        
        const {actvt_id} = req.body;
        await ActivityModel.update({estatus: ''}, {where: actvt_id})
        .then(success => {

            if (success) {
                return res.json({retorno: '1'})
            }
            
        })
        .catch(err => {
            console.log('Erro na ActivityModel', err)
        })

    }

}