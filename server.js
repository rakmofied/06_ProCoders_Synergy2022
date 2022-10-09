const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/artgallery", {
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
