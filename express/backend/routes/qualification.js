const express = require('express');
const router = express.Router(); 
router.get("/quali", (req,res)=>{
    var College = "Manipal University Jaipur";
    var Year = 3; 
    var city = "Jaipur"; 
    var placement = "none";

    res.json({
        college:College, 
        year:Year, 
        city:city, 
        placement:placement
    })
})
module.exports = router