const express = require('express');
const router = express.Router();

//query?name=Sarthak&age=20 
// when we type someting like this, it is used for query

//difference between query and params is that query is for narrowing out search and , param is for exact thing
router.get("/",(req,res)=>{
    console.log(req.query.name);
    console.log(req.query.age);
    console.log(req.query.sort);
    res.send("done")
    
})
module.exports=router