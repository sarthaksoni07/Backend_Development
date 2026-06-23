const chqName =(req,res,next)=>{
    if(req.query.name=="sarthak"){
        next();
    }else{
        res.send("Name Required")
    }
}
module.exports={chqName}