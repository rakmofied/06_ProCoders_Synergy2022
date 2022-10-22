if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const app = express();
const engine = require("ejs-mate");
const userRoutes = require("./route/user");
const artRoutes = require("./route/arts");
const { urlencoded } = require("body-parser");
const res = require("express/lib/response");
const flash = require("connect-flash");
const passport = require("passport");
const localpassport = require("passport-local");
const User = require("./models/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));

const dbUrl = process.env.URL;
const secret = process.env.SECRET || "thisshouldbeabettersecret";

const store = new MongoStore({
  mongoUrl: dbUrl,
  secret,
  touchAfter: 24 * 60 * 60,
});

store.on("error", function (e) {
  console.log("Session Store Error", e);
});

const sessionConfig = {
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localpassport(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("arts/home.ejs");
});

app.use("/", userRoutes);

// app.use("*", (err, res, req, next) => {
//   res.send("Hello Something Gone Wrong..!!");
// });
module.exports = app;
