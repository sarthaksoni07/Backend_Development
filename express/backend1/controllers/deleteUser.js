const { User } = require("../models/User");

const deleteUser = async (req, res, next) => {
  try {
    if(req.params.id!=req.user.id){
      return res.status(403).json({
        message:"fobidden", 
        success:false
      })
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
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
