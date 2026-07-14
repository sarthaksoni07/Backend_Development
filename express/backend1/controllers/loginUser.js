const bcrypt = require('bcrypt')
const { User } = require('../models/User')
const jwt= require('jsonwebtoken')
const loginUser = async (req , res , next )=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
          return res.status(401).json({
                success:false, 
                message:"wrong email or password"
            })
        }
        const password = req.body.password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
         return res.status(401).json({
                success:false, 
                message:"email or password invalid"
            })
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(200).json({
            message:"user is logged In",
            success:true,
            key:token
        })

    }catch(err){
        next(err)
    }
}
module.exports= {loginUser}