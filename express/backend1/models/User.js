const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  email: String,
  created: { type: Date, default: Date.now },
  password:String//added password field, but we are not storing it straight away. 
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
