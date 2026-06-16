const express = require('express');
const connected = require('../middleware/connected');

const router = express.Router(); 
router.get("/quali",connected,  (req,res)=>{//usage 2 of middleware we can invoke this function before we actually run the response runction of the (req, res)
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