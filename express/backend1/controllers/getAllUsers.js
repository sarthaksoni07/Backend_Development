const { User } = require("../models/User");
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length===0) {
      return res.status(404).json({
        message: "no users found",
        success: false,
      });
    }
    res.status(200).json({
      data: users,
      message: "List of Students ",
      success: true,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllUsers };
