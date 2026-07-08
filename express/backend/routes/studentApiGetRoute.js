const express = require('express');
const { getStudents } = require('../controller/studentApiGetController');
const { getOne } = require('../controller/studentApiOneController');
const router = express.Router();

router.get("/studentApi/getAll",getStudents)
router.get("/studentApi",getOne)
module.exports = router;