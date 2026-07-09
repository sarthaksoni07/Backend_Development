const { Student } = require("../model/Student");
const getOne = async (req, res) => {
  const student = await Student.find({ semester: req.query.semester });
  if (!student) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "found",
      data: student,
    });
  }
};
module.exports = { getOne };
