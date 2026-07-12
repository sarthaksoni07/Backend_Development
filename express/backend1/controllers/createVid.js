const {Video} = require("../models/Video")
const createVideo = async(req, res, next)=>{
try{

    const newVideo = await Video.create(req.body)    
    res.status(201).json({
        success:true, 
        message:"Video was uploaded",
        data:newVideo
    })
}catch(err){
    next(err);
}
}
module.exports={createVideo}