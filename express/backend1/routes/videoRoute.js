const express = require("express");
const router = express.Router();
const { getAllVid } = require("../controllers/getAllVideo");
const { getMyVid } = require("../controllers/getMyVideo");
const { createVideo } = require("../controllers/createVid");

router.get("/all", getAllVid);
router.get("/my", getMyVid);
router.post("/create", createVideo);

module.exports = router;