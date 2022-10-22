const { urlencoded } = require("express");
const express = require("express");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();
const passport = require("passport");
const app = express();

const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    res.redirect("register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.login = (req, res) => {
  try {
    console.log("Hello Inside Login controller");
    // if (req.user.type === "TPO" || req.user.type === "Exam Cell") {
    //   res.redirect("/register");
    // }

    res.redirect("/userdashboard");
  } catch (e) {
    console.log(e);
  }
};

module.exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    console.log("Logout");
    res.redirect("/userdashboard");
  });
};
