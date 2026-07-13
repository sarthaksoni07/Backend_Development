const { Video } = require("../models/Video")

const getAllVid = async(req , res , next )=>{
    const vidoes = await Video.find().populate("owner", "email")
    res.status(200).json({
        success:true, 
        data:vidoes
    })
}
module.exports = {getAllVid}