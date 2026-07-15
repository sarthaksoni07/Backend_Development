const express = require("express");
const router = express.Router();
const allowSelfOrAdmin = require("../middleware/allowSelfOrAdmin")
const { getAllVid } = require("../controllers/getAllVideo");
const { getMyVid } = require("../controllers/getMyVideo");
const { createVideo } = require("../controllers/createVid");
const {deleteVid} = require("../controllers/deleteVid")

router.get("/all", getAllVid);
router.get("/my", getMyVid);
router.post("/create", createVideo);
router.delete("/delete/:id", allowSelfOrAdmin,deleteVid)

module.exports = router;