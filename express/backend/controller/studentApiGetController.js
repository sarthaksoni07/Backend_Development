const{ Student} = require('../model/Student');
const getStudents = async(req, res)=>{
    const student = await Student.find()//something like this ???
    res.status(200).json({
        success:true,
        data:student,
        message:"all Students were fetched"
    })
}

module.exports={getStudents};