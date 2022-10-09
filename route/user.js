const express = require("express");
const router = express.Router();
const users = require("../controllers/user");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
router.route("/register").get(users.renderRegister).post(users.register);

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      //   failureRedirect: "/register",
      failureMessage: true,
      keepSessionInfo: true,
    }),
    users.login
  );

module.exports = router;
