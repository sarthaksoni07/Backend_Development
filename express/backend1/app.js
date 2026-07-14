const express = require('express')
const app = express()

app.use(express.json());

const authMiddleware = require("./middleware/authMiddleware")


const call= require("./middleware/call")
const user = require("./routes/userRoute")
const video = require("./routes/videoRoute")
const public = require("./routes/authRoutes")


app.use(call)

app.use("/",public)
app.use(authMiddleware)

app.use("/user", user)
app.use("/video", video)


app.use((req, res)=>{
    res.status(404).json({
        message:"no routes found"
    })
})
module.exports= app