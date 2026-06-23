// this is the file intended to handle the errors faced by whole codebase that sits here
const error = (err, req,res,next)=>{
    console.log(err.message);
    res.send("failed");
}
module.exports={error};