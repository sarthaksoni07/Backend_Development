const { Video } = require("../models/Video")

const deleteVid = async(req,res,next)=>{
    const video = await Video.findById(req.params.id).populate("owner")
    if(!video){
        res.status(404).json({
            message:"video not found",
            success:false
        })
    }
    if(video.owner.id!=req.user.id){
        return res.status(403).json({
            success:false, 
            message:"forbidden to delete someone else's video"
        })
    }
    const deleted_video = await Video.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true, 
        message :"video deleted",
        data:deleted_video
    })
}
module.exports={deleteVid}