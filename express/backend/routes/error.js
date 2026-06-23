const express = require('express');
const router = express.Router();
const {eror}= require("../controller/erdemo");
router.get('/',eror);
module.exports=router;
