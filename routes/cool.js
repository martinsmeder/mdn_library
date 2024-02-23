const express = require("express");

// create express.Router object
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
