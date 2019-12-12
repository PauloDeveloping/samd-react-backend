const User = require('../models/User')
const appdb = require('../config/appdb')

module.exports = {

    async index(req, res) {

        if (req.query.user_type == null || req.query.user_type == '') {

            const users = await User.findAll();

            return res.json({retorno: users});
        } 
        
        else {
            
            const users = await User.findAll({
                where: {
                    user_type: req.query.user_type,
                    user_block: "N"
                }
            });

            return res.json({retorno: users});
        }
    },

    async show(req, res) {

        const { user_id } = req.params

        await User.findOne({where: {user_id}})
        .then(data => {

            if (data) {
                return res.json({retorno: data})
            }

            else {
                return res.json({retorno: 0})
            }

        })
        .catch(err => {

            console.log('Erro em user: ', err)

        })

    },

    async store(req, res) {

        const { filename } = req.file

        let user = await User.findOne({
            where: {
                user_cpf: req.body.user_cpf
            }
        })

        if (!user) {

            await User.create({
                user_rm: req.body.user_rm,
                user_photo: filename,
                user_full_name: req.body.user_full_name,
                user_birth_date: req.body.user_birth_date,
                user_cpf: req.body.user_cpf,
                user_rg: req.body.user_rg,
                user_genre: req.body.user_genre,
                user_email_pers: req.body.user_email_pers,
                user_email_inst: req.body.user_email_inst,
                user_cel: req.body.user_cel,
                user_tel: req.body.user_tel,
                inst_fk: 1
            })
            .then(success => {

                if(success == 1) {
                    return res.json({retorno: 1})
                }

                else {
                    return res.json({retorno: 0})
                }

            })
            .catch(err => {
                console.log('Erro na User: ', err)
            })

        } 
        
        else {
            return res.status(400).json({ error: "Usuário existente" })
        }
    },

    async update(req, res) {

        const { user_id } = req.headers
        const { filename } = req.file

        await User.update(
            {
                user_photo: filename,
                user_full_name: req.body.user_full_name,
                user_birth_date: req.body.user_birth_date,
                user_cpf: req.body.user_cpf,
                user_rg: req.body.user_rg,
                user_genre: req.body.user_genre,
                user_email_pers: req.body.user_email_pers,
                user_email_inst: req.body.user_email_inst,
                user_cel: req.body.user_cel,
                user_tel: req.body.user_tel,
                inst_fk: 1 
            },
            {
                where: {user_id}
            }
        )
        .then(success => {

            if (success == 1) {

                return res.json({retorno: 1})

            }

            else {

                return res.json({retorno: 0})
            }

        })
        .catch(err => {

            console.log('Erro em User: ', err)

        })
    },

    async destroy(req, res) {

        const { user_id } = req.headers

        const userDestroy = await User.findOne({
            where: { user_id }
        })

        if (!userDestroy) {
            return console.log("User doesn't exists")
        }

        const userDestroyed = await User.update(
            { estatus: 'D' },
            {
                where: { user_id }
            }
        )

        if(userDestroyed == 1) {

            return res.json({retorno: 1})

        }

        else {

            return res.json({retorno: 0})

        }
    },

    async restore(req, res) {

        const { user_id } = req.headers

        const userRestore = await User.findOne({
            where: { user_id }
        })

        if (!userRestore) {
            return console.log("User doesn't exists")
        }

        const userRestored = await User.update(
            { estatus: '' },
            { where: { user_id }}
        )

        if(userRestored == 1) {

            return res.json({retorno: 1})

        }

        else {

            return res.json({retorno: 0})

        }

    },

    async showUserDocs(req, res) {

        await appdb.sequelize.query('SELECT * FROM vw_userDocs').then(data => {

            if (data) {

                console.log(data[0])
                return res.json(data[0])

            }

            return res.json(0)

        })
        .catch(err => {

            console.log('Erro! ', err)

        })

    }
}