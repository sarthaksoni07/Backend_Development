const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength:30
  }, // we wil add validation to this, which means, we don't want any inconsistent data, or false data somethinglike "    ", a blank space as name, or , false names
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  created: { type: Date, default: Date.now },
  password: {
    type: String,
    minlength: 8,
    maxlength: 20,
    trim: true,
    required: true,
  }, //added password field, but we are not storing it straight away.
  role: { type: String,enum:["admin", "user"],  default: "user" },
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
