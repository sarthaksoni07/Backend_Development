const { User } = require("../models/User");

const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "user not found",
        success: true,
      });
    }
    res.status(200).json({
      message: "user deleted",
      data: deletedUser,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { deleteUser };
