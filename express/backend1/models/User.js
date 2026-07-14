const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  email: String,
  created: { type: Date, default: Date.now },
  password:String
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
