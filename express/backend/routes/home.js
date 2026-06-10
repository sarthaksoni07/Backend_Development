const express = require('express');
const router = express.Router();
router.get("/info", (req,res)=>{
    var name = "Sarthak"; 
    var age = "20";
    var message = "Welcome to Node js!";
    var gender = "male";

    res.json(
        {
            name:name,
            age:age,
            message:message,
            gender:gender
        }
    )
})
module.exports = router