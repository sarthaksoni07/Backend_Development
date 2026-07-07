const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:String,
    semester: Number
})
const Student = mongoose.model("Student", studentSchema); //without creating a model , we don't actually have any thing or app to work on, we just have a blueprint
module.exports= {Student}