const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Express is live",
        success:true
    })
})

module.exports= app