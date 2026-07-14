const express = require('express')
const router = express.Router()

const { deleteUser } = require("../controllers/deleteUser");
const{getAllUsers} = require("../controllers/getAllUsers")

router.get("/all",getAllUsers)
router.delete("/delete/:id", deleteUser);
module.exports = router