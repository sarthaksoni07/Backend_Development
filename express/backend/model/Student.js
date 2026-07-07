const mongoose = require('mongoose');
const studentScheme = new mongoose.Schema({
    name:String,
    semester: Number
})
const Student = mongoose.model("Student", studentScheme); 
module.exports= {Student}