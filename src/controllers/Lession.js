const LessionModel = require('../models/Lession')

module.exports = {

    async store(req, res) {

        const { filename } = req.file
        const lession = {
            lession_name: req.body.lession_name,
            lession_desc: req.body.lession_desc,
            lession_size: req.body.lession_size,
            lession_ext: req.body.lession_ext,
            lession_file: filename,
            comp_fk: req.body.comp_id
        }

        await LessionModel.create(lession).then(success => {

            console.log('sucesso', success);
            if (success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async index(req, res) {

        await LessionModel.findAll().then(data => {

            if(data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async show(req, res) {

        const { lession_id } = req.params

        await LessionModel.findOne({where: {lession_id}}).then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }
            
        })

    },

    async update(req, res) {

        const { filename } = req.file
        const lession = {
            lession_name: req.body.lession_name,
            lession_desc: req.body.lession_desc,
            lession_size: req.body.lession_size,
            lession_ext: req.body.lession_ext,
            lession_file: filename
        }

        const { lession_id } = req.body

        await LessionModel.update(lession, {where: {lession_id}})
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

        const { lession_id } = req.body

        await LessionModel.update({estatus: 'D'}, {where: {lession_id}})
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

        const { lession_id } = req.body

        await LessionModel.update({estatus: ''}, {where: {lession_id}})
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