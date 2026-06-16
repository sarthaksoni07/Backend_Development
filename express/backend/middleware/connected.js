const express = require('express');
const conn =(res,req,next)=>{
    console.log("api called");
    next();
};
module.exports=conn;