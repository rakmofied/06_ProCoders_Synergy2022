const { urlencoded } = require("express");
const express = require("express");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();
const Transcript = require("../models/transcript");

module.exports.renderPage = (req, res) => {
  res.render("users/user_dashboard");
};

module.exports.rendertranscriptPage = (req, res) => {
  res.render("users/tform");
};

module.exports.feedDetails = (req, res) => {
  const transcript = new Transcript(req.body.transcript);
  transcript.paymentStatus = false;
  transcript.status = 1;
  res.send(transcript);
};
