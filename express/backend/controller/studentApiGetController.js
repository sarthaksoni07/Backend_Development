const { Student } = require("../model/Student");
const getStudents = async (req, res) => {
  const student = await Student.find(); //something like this ???
  if (!student) {
    res.status(404).json({
      success: false,
      message: "no data found",
    });
  } else {
    res.status(200).json({
      success: true,
      data: student,
      message: "all Students were fetched",
    });
  }
};

module.exports = { getStudents };
