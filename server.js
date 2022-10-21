const app = require("./app");
const mongoose = require("mongoose");
<<<<<<< HEAD
require("dotenv").config();

mongoose.connect(process.env.MONGODB, {
=======
require('dotenv').config()

mongoose.connect(process.env.URL, {
>>>>>>> d80ccf38ca0eb01d4c316c794b6c59d2bd77c8f9
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Connected");
});

app.listen("3000", (req, res) => {
  console.log("Listening to the server");
});
