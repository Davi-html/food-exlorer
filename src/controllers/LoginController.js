const Login = require('../models/LoginModel')

exports.index = function(req, res){
  res.render('login');
};

exports.register = async function(req, res){
  const login = new Login(req.body)
  await login.register()
}
