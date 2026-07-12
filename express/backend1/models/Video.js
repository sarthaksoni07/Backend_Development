const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
    title:String, 
    uploaded:{type:Date, default:Date.now}, 
    owner:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"User"
    }
})
const Video = mongoose.model("video",videoSchema);
module.exports={Video}