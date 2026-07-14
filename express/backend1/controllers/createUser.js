const {User}= require('../models/User')
const bcrypt = require("bcrypt")
const createUser = async (req , res, next)=>{
try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPassword
    const newUser = await User.create(req.body)
    
    res.status(201).json({
        success:true, 
        message:"User Created",
        data:newUser.name
    })
}catch(err){
    next(err);
}
}
module.exports={createUser}