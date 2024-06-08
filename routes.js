const express = require('express')
const routes = express.Router()
const loginController = require('./src/controllers/LoginController')

routes.post('/login/register', loginController.register)

module.exports = routes