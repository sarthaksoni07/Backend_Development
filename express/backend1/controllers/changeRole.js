const { User } = require("../models/User")

const changeRole = async (req, res, next)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, {role:req.body.role}, {new:true})
        if(!user){
            return res.status(404).json({
                message:"user not found", 
                success:false
            })
        }
        res.status(200).json({
            success:true, 
            message:"user role updated", 
            role:user.role
        })
    }catch(err){
        next(err);
    }
}
module.exports= {changeRole}