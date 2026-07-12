const {User}= require('../models/User')
const createUser = async (req , res, next)=>{
try{

    const newUser = await User.create(req.body)
    
    res.status(201).json({
        success:true, 
        message:"User Created",
        data:newUser
    })
}catch(err){
    next(err);
}
}
module.exports={createUser}