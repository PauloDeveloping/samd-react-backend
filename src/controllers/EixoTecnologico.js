const EixoTecnologicoModel = require('../models/EixoTecnologico')

module.exports = {

    async index(req, res) {

        await EixoTecnologicoModel.findAll().then(data => {

            if (data) {
                return res.json({retorno: data})
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async show(req, res) {

        const { eixotec_id } = req.params

        await EixoTecnologicoModel.findOne({where: {eixotec_id}})
        .then(data => {

            if (data) {
                return res.json({retorno: data})
            }

            else {
                return res.json({retorno: 0})
            }
                
        })

    },

    async store(req, res) {

        const eixo = {
            eixotec_name: req.body.eixotec_name,
            eixotec_desc: req.body.eixotec_desc
        }

        await EixoTecnologicoModel.create(eixo).then(success => {

            if (success) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async update(req, res) {

        const eixo = {
            eixotec_name: req.body.eixotec_name,
            eixotec_desc: req.body.eixotec_desc
        }

        const { eixotec_id } = req.body

        await EixoTecnologicoModel.update(eixo, {where: {eixotec_id}})
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

        const { eixotec_id } = req.body

        await EixoTecnologicoModel.update({estatus: 'D'}, {where: {eixotec_id}})
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

        const { eixotec_id } = req.body

        await EixoTecnologicoModel.update({estatus: 'D'}, {where: {eixotec_id}})
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