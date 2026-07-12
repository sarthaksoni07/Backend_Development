const express = require('express')
const app = express()
const {call}= require("./middleware/call")

const user = require("./routes/createUser")
const video = require("./routes/createVideo")

app.use("/User",user)
app.use("/video",video)

app.get("/",call, (req,res)=>{
    res.status(200).json({
        message:"Express is live",
        success:true
    })
})

module.exports= app