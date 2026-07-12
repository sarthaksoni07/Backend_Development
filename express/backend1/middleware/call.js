const call = (req,res, next)=>{
    console.log("api  called");
    next();
}
module.exports={call}