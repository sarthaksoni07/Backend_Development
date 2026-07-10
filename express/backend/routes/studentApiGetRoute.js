const express = require('express');
const { getStudents } = require('../controller/studentApiGetController');
const { getOne } = require('../controller/studentApiOneController');
const { getQuery } = require('../controller/studentApiQuery');
const { deleteStudent } = require('../controller/studentApiDeleteController');

const router = express.Router();

router.get("/studentApi/getAll",getStudents)
router.get("/studentApi",getOne)
router.get("/studentApi/:id",getQuery)
router.delete("/studentApi/:id",deleteStudent)
module.exports = router;