const EventModel = require('../models/Event')

module.exports = {

    async index(req, res) {

        await EventModel.findAll().then(data => {

            if (data) {

                return res.json({retorno: data})

            }

            else {

                return res.json({retorno: 0})

            }
            
        })

    },

    async show(req, res) {

        const { event_id } = req.params

        await EventModel.findOne({where: {event_id}})
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

        const event = {
            event_title: req.body.event_title,
            event_desc: req.body.event_desc,
            event_start: req.body.event_start,
            event_end: req.body.event_end,
            inst_fk: req.body.inst_id
        }

        await EventModel.create(event).then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})

            }

        })

    },

    async update(req, res) {

        const event = {
            event_title: req.body.event_title,
            event_desc: req.body.event_desc,
            event_start: req.body.event_start,
            event_end: req.body.event_end,
            inst_fk: req.body.inst_id
        }

        const { event_id } = req.body

        await EventModel.update(event, {where: {event_id}})
        .then(success => {

            if(success == 1) {
                return res.json({retorno: 1})
            }

            else {
                return res.json({retorno: 0})
            }

        })

    },

    async destroy(req, res) {

        const { event_id } = req.body

        await EventModel.update({estatus: 'D'}, {where: {event_id}})
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

        const { event_id } = req.body

        await EventModel.update({estatus: ''}, {where: {event_id}})
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