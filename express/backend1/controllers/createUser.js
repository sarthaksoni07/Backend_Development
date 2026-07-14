const {User}= require('../models/User')
const bcrypt = require("bcrypt")
const createUser = async (req , res, next)=>{
try{
    //when user sends their password over to the server, extract, hash, and replace it with the req.body.password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPassword
    const newUser = await User.create(req.body)
    
    res.status(201).json({
        success:true, 
        message:"User Created",
        data:newUser.name//only return the name, or some other detail, never the password itself.
    })
}catch(err){
    next(err);
}
}
module.exports={createUser}