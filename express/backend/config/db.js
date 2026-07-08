//configuration to connect to db go here
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports= {connectDB}
// this is how we actually connect to the db