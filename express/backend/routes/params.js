const express = require('express');
const router = express.Router();

router.get("/:id",(req, res)=>{
    console.log(req.params);// the :id part in the path is dynamic, it is called th parameters or simpy params
    res.send("done");
})

router.get("/:id/:name",(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.name);
    res.send("done");
})
module.exports=router