const LoginModel = require('../models/Login')
const passport = require('passport')

module.exports = {

    async login(req, res, next) {

        console.log('body: ', req.body);

        const retorno = {
            username: '',
            status: 0,
            usertype: '',
            user_id: 0
        }
        
        passport.authenticate('local', (err, user, info) => {

            if (err) {
                return next(err)
            }
    
            if(!user) {
    
                return res.json(retorno)
    
            }
    
            req.logIn(user, (err) => {
    
                if (err) {
                    console.log(err)
                    return next('err')
                }
    
                if(user.usertype == 'A') {
    
                    retorno.status = 1
                    retorno.usertype = 'A'
                    retorno.username = user.username
                    retorno.user_id = user.user_fk
    
                }
    
                else if (user.usertype == 'S') {
    
                    retorno.status = 1
                    retorno.usertype = 'S'
                    retorno.username = user.username
                    retorno.user_id = user.user_id
    
                }
    
                else if (user.usertype == 'T') {
    
                    retorno.status = 1
                    retorno.usertype = 'T'
                    retorno.username = user.username
                    retorno.user_id = user.user_id
    
                }
    
            })

            return res.json(retorno)
    
        })
        
        (req, res, next)

    },

    async isLoggedIn(req, res) {

        return res.json(res.locals.loggedUser)

    },

    async passwdRecovery(req, res) {



    },

    async logout(req, res) {

        //matar sessao
        //redirecionar para pag de login

    }

}