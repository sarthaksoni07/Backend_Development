const express = require('express');
const router = express.Router();
const {getStudent} = require('../controller/studentController')
router.get('/:id', getStudent);
module.exports=router;