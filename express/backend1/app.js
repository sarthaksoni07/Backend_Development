const express = require('express')
const app = express()
app.use(express.json());
const call= require("./middleware/call")

const user = require("./routes/createUser")
const video = require("./routes/createVideo")
const getAllVid= require("./routes/getAllVid")
const getAllUser = require("./routes/getAllUser")
const deleteUser = require("./routes/deleteUser")
const loginUser = require("./routes/loginUser")
app.use(call)
app.use("/user",loginUser)
app.use("/user", deleteUser)
app.use("/user",getAllUser)
app.use("/user",user)
app.use("/video",video)
app.use("/video/get", getAllVid)
app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Express is live",
        success:true
    })
})

module.exports= app