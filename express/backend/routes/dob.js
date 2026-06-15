const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var date = 28;
  var month = 4;
  var year = 2004;
  res.json({
    date: date,
    month: month,
    year: year,
  });
});

module.exports=router;