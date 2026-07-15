const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //finds user by email
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "wrong email or password",
      });//if user not found , then return this status
    }

    const password = req.body.password;//if user found, extract their password
    const isMatch = await bcrypt.compare(password, user.password);//compare their password using bcrypt

    if (!isMatch) {//if password match, login, if not, return
      return res.status(401).json({
        success: false,
        message: "email or password invalid",
      });
    }
    //if login, send them the "key", using, which they will use with http header whenever they sent requres
    const token = jwt.sign({ id: user._id , role:user.role}, process.env.JWT_SECRET, {//jwt.sign(paylode,secret,options)
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "user is logged In",
      success: true,
      key: token,
    });

  } catch (err) {
    next(err);
  }
};
module.exports = { loginUser };
