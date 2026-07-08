const { Student } = require("../model/Student");

const createStudent = async (req, res) => {
    console.log(req.body)
  const student = await Student.create(req.body);// we use const student = awiat Student.create(req.body); becuase we can use student.id , or student.name later in this controller or use this later too.
  res.send("student created");
};
module.exports = { createStudent };
