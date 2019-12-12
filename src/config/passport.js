const localStrategy = require('passport-local').Strategy;
//const bcrypt = require('bcrypt');

const loginModel = require('../models/Login')

// middleware de autenticação
module.exports = function (passport) {

    //usando a forma de autenticação local (usando nosso proprio banco de dados)
    passport.use(new localStrategy({ usernameField: 'username', passwordField: 'passwd' }, (user, passwd, done) => {

        const login = {
            username: user,
            passwd: passwd
        }

        //const salt = 'batata@123'

        //validação passport
        loginModel.findOne({where: {username: login.username, passwd: login.passwd}})
        .then((data) => {

            console.log('retorno:', data);

            if (!data) {
                
                return done(null, false, {message: 'Login ou senha incorretos'})
            }

            else {

                return done(null, data)

            }

        }).catch((err) => {

            console.log('Erro ao logar: ', err)

        })

    }))

    //salvar dados do usuário em uma sessão
    passport.serializeUser((usuario, done) => {

        done(null, usuario)

    })

    passport.deserializeUser((login, done) => {
        loginModel.findOne(login).then((data) => {
            done(null, data);
        })
        .catch((err) => {
            console.log('erro: ', err)
            done(null, false, {message: 'Usuário invalido'})
        })
    })

}