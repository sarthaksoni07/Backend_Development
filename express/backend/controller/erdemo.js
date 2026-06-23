
const eror = (req,res,next)=>{
    next(new Error("this is an error . "));
}
module.exports= {eror};


