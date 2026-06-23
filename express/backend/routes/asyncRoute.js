const express = require('express');
const router = express.Router();
const {async} = require('../controller/asyncController');

router.get("/",async);
module.exports=router;