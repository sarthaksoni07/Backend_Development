const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
    title:String, 
    uploaded:Date, 
    likeCount:Number, 
    commentCount:Number,
    owner:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"User"
    }
})
const Video = mongoose.model("video",videoSchema);
module.exports={Video}