const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const createUser = async (req, res, next) => {
  try {
    //when user sends their password over to the server, extract, hash, and replace it with the req.body.password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = req.body;
    const newUser = await User.create({
      name: user.name,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Created",
      data: newUser.name, //only return the name, or some other detail, never the password itself.
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { createUser };
