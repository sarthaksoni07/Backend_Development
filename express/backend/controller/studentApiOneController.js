const { Student } = require("../model/Student");
const getOne = async (req, res) => {
  const students = await Student.find({ semester: req.query.semester });
  if (!students) {//findOne is used to find only one instance of the field
    res.status(404).json({
      success: false,
      message: "not found",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "found",
      data: students,
    });
  }
};
module.exports = { getOne };
