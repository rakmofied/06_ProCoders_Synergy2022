const express = require("express");
const router = express.Router();
const dashboard = require("../controllers/dashboard");
const { isLoggedIn } = require("../middleware");

router.route("/").get(dashboard.renderPage);

router
  .route("/transcriptform")
  .get(isLoggedIn, dashboard.rendertranscriptPage)
  .post(dashboard.feedDetails);

module.exports = router;
