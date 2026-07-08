const express = require('express');
const { getStudents } = require('../controller/studentApiGetController');
const router = express.Router();

router.get("/studentApi/getAll",getStudents)
module.exports = router;