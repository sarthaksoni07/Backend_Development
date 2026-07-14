const express = require('express')
const { getAllVid } = require('../controllers/getAllVideo')
const router = express.Router()
const {getMyVid} = require("../controllers/getMyVideo")
router.get("/all", getAllVid)
router.get("/my", getMyVid)

module.exports=router