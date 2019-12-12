const AddressModel = require('../models/Address')

module.exports = {

    async index(req, res) {

        await AddressModel.findAll().then(data => {

            if (data) {

                return res.json({retorno: 1})
                
            }

        })
        .catch(err => {
            console.log(' Erro na AdressModel: ',err);
        })

    },

    async show(req, res) {

        const {addr_id} = req.params

        await AddressModel.findById(addr_id)
        .then(data => {

            if (data) {
                return res.json(data);
            }

        })
        .catch(err => {

            console.log('Erro na AddressModel', err)

        })

    },

    async store(req, res) {

        const {addr_cep, addr_name, addr_ngh, addr_city, addr_state} = req.body

        await AddressModel.create(addr_cep, addr_name, addr_ngh, addr_city, addr_state)
        .then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

        })
        .catch(err => {

            console.log('Erro na AddressModel', err)

        })

    },

    async update(req, res) {

        const object = {
            addr_cep,
            addr_name,
            addr_ngh,
            addr_city,
            addr_state,
            addr_id
        } = req.body

        await AddressModel.update(object, {where: {addr_id: object.addr_id}})
        .then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

        })
        .catch(err => {

            console.log('Erro na AddressModel', err)

        })


    },

    async destroy(req, res) {

        const {addr_id} = req.body

        await AddressModel.update({estatus: 'D'}, {where: addr_id})
        .then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

        })

    },

    async restore(req, res) {
        
        const {addr_id} = req.body

        await AddressModel.update({estatus: ''}, {where: addr_id})
        .then(success => {

            if (success) {

                return res.json({retorno: 1})

            }

        })

    }

}