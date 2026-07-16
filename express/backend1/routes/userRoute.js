const express = require("express");
const router = express.Router();

const { deleteUser } = require("../controllers/deleteUser");
const { getAllUsers } = require("../controllers/getAllUsers");
const { changeRole } = require("../controllers/changeRole");
const allowSelfOrAdmin = require("../middleware/allowSelfOrAdmin");
const onlyAdmin = require("../middleware/onlyAdmin");

router.get("/all", getAllUsers);
router.delete("/delete/:id", allowSelfOrAdmin, deleteUser);
router.patch("/changeRole/:id", onlyAdmin, changeRole);

module.exports = router;
