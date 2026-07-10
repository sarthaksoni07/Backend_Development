const express = require('express');
const { getStudents } = require('../controller/studentApiGetController');
const { getOne } = require('../controller/studentApiOneController');
const { getQuery } = require('../controller/studentApiQuery');
const { deleteStudent } = require('../controller/studentApiDeleteController');
const { updateStudent } = require('../controller/studentApiUpdateController');

const router = express.Router();

router.get("/studentApi/getAll",getStudents)
router.get("/studentApi",getOne)
router.get("/studentApi/:id",getQuery)
router.delete("/studentApi/:id",deleteStudent)
router.patch("/studentApi/:id",updateStudent)
module.exports = router;