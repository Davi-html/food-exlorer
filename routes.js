const express = require('express')
const routes = express.Router()

routes.post('/form', (req, res)=>{
  console.log('backend funcionando')
})

module.exports = routes