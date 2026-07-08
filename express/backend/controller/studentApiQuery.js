const { Student } = require("../model/Student")

const getQuery = async (req,res)=>{
    const student = await Student.findById(req.params.id)
    if(!student){
        res.status(404).json({
            success:false,
            message:"student not found"
        });
    }else{

        res.status(200).json({
            data:student,
            message:"found",
            success:true
        })
    }
}
module.exports = {getQuery}