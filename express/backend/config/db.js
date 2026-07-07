//configuration to connect to db go here
const mongoose = require('mongoose');
const connectDB = async ()=>{

    await mongoose.connect();
}