const mongoose= require('mongoose')

const userSchema =new mongoose.Schema({
    name:String, 
    dateOfBirth: Date, 
    email: String, 
    created:Date
})
const User = mongoose.model("User",userSchema)
module.exports={User}