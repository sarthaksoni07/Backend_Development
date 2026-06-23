const chkAge = (req,res,next)=>{
    next(new Error("age not found"));
}
module.exports = {chkAge}