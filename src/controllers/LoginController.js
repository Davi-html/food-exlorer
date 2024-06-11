const Login = require("../models/LoginModel");

exports.index = function (req, res) {
  if (req.session.user) return res.render("home");
  
  return res.render("signin");
};

exports.signup = function (req, res) {
  return res.render("signup");
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        res.redirect("/signup");
      });
      return;
    }

    req.flash("success", "Seu usuário foi cadastrado com sucesso");
    req.session.save(function () {
      res.redirect("/signup");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        res.redirect("/");
      });
      return;
    }

    req.flash("success", "Você entrou no sistema.");
    req.session.user = login.user;
    req.session.save(function () {
      res.redirect("/");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/");
};
