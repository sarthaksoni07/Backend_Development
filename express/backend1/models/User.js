const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 30,
    validate: {
      validator: function (value) {
        return !/\d/.test(value);
      },
      message: "Name cannot have characters",
    },
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
    required: true,// we have removed the option, because, we know, in the db, the password stores will be hashed, and we don't want to enforce any other rule in this, 
  }, //added password field, but we are not storing it straight away.
  role: { type: String, enum: ["admin", "user"], default: "user" },
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
//
//different responsibility of validation is , the schema level validation, such as, name, the min length, 
// validation before schema involves, password min length, passwoord upper case, and other things, because , the password which wil actually be stored in the db will be different than the password sent by user.
