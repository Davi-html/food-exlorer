const Login = require('../models/LoginModel')

exports.register = async function(req, res){

  const login = new Login(req.body)
  await login.register()
  res.redirect('/')
}