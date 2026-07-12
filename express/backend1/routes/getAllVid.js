const express = require('express')
const { getAllVid } = require('../controllers/getAllVideo')
const router = express.Router()

router.get("/all", getAllVid)

module.exports=router