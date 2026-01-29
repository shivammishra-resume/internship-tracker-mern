const express = require("express");
const {
  getInternships,
  createInternship
} = require("../controllers/internshipController");

const router = express.Router();

router.route("/")
  .get(getInternships)
  .post(createInternship);

module.exports = router;
