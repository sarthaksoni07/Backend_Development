const express = require('express')
const router = express.Router()
const {createVideo} = require('../controllers/createVid')

router.post("/create", createVideo)
module.exports=router