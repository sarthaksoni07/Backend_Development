const express = require('express');
const router= express.Router();
const {createStudent} = require('../controller/studentApiController');
const studentMIddleware = require('../middleware/studentApiMiddleware')
router.post("/studentApi/create",  studentMIddleware,createStudent);
module.exports=router