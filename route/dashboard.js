const express = require("express");
const router = express.Router();
const dashboard = require("../controllers/dashboard");

router.route("/").get(dashboard.renderPage);

router
  .route("/transcriptform")
  .get(dashboard.rendertranscriptPage)
  .post(dashboard.feedDetails);

module.exports = router;
