const DocumentModel = require('../models/Document')

module.exports = {

    async index(req, res) {

        await DocumentModel.findAll().then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async show(req, res) {

        const { doc_id } = req.params

        await DocumentModel.findOne({where: {doc_id}}).then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async store(req, res) {

        const { filename } = req.file
        const document = {
            doc_name: req.body.doc_name,
            doc_desc: req.body.doc_desc,
            doc_file: filename,
            user_fk: req.body.user_id
        }

        await DocumentModel.create(document).then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async update(req, res) {

        const { filename } = req.file
        const document = {
            doc_name: req.body.doc_name,
            doc_desc: req.body.doc_desc,
            doc_file: filename,
            user_fk: req.body.user_id
        }

        const { doc_id } = req.body

        await DocumentModel.update(document, {where: {doc_id}})
        .then(success => {

            if (success) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async destroy(req, res) {

        const { doc_id } = req.body

        await DocumentModel.update({estatus: 'D'}, {where: {doc_id}})
        .then(success => {

            if (success) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async restore(req, res) {

        const { doc_id } = req.body

        await DocumentModel.update({estatus: ''}, {where: {doc_id}})
        .then(success => {

            if (success) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })
        
    }

}