const express = require('express')
const routes = express.Router()
const loginController = require('./src/controllers/LoginController')

routes.get('/', loginController.index)
routes.get('/signup', loginController.signup)
routes.get('/login/logout', loginController.logout)

routes.post('/login/register', loginController.register)
routes.post('/login/login', loginController.login)

module.exports = routes