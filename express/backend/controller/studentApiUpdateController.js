const { Student } = require("../model/Student");

const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "no student found",
      });
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "student updated",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { updateStudent };
