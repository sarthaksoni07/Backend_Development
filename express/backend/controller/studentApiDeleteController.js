const { Student } = require("../model/Student");

const deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    res.status(404).json({
      success: false,
      message: "no student found"
    });
  } else {
    res.status(200).json({
      success: true,
      message: "deleted",
      data:student
    });
  }
};

module.exports = { deleteStudent };
