const express = require('express')
const app = require('./app')
const dotenv = require("dotenv")
const {connectDB}= require("./config/db")
dotenv.config();


const PORT = process.env.PORT; 
const start = async ()=>{
    await connectDB();
    app.listen(PORT, ()=>{
        console.log("listening on "+PORT);
    })
} 
start();