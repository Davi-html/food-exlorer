const Login = require("../models/LoginModel");

exports.index = function (req, res) {
  return res.render("login");
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();
    
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      res.redirect("/login/signin");
      
      req.session.save(function(){
        res.redirect('/login/signin')
      })
      return;
    }

    req.flash("success", "Seu usuário foi cadastrado com sucesso");
    req.session.save(function(){
      res.redirect('/login/signin')
    })
  } catch (e) {
    console.log(e);
  }
};
