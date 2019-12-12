const express = require('express')
const routes = express.Router()

//controllers
const LoginController = require('../controllers/Login')


routes.post('/login', LoginController.login)
routes.post('/passwd-recovery', LoginController.passwdRecovery)
routes.post('/logout', LoginController.logout)


module.exports = routes