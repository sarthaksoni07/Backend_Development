const { Video } = require("../models/Video")

const getMyVid = async(req,res,next)=>{
    try{
        const vidoes = await Video.find({owner:req.user.id})
        if(vidoes.length===0){
            return res.status(404).json({
                succss:false, 
                message:"no vidoes found"
            })
        }
        res.status(200).json({
            data:vidoes, 
            success:true
        })
    }catch(err){
        next(err)
    }
}
module.exports={getMyVid}