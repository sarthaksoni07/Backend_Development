// this is where we writ everything other than app.listen().const express = require("express");//import the express module from the node 
const express = require('express');
const app = express();// create a local app of the module and use it
const cors = require("cors");
app.use(cors());

// the below lines are what we are kind of importing into our app, routes and middleware are imported here
const userRoute = require("./routes/home");
const quali = require("./routes/qualification");
const todayModule = require("./controller/today");
const dob = require("./routes/dob");
const input = require("./routes/input");
const connected = require("./middleware/connected");
const params= require("./routes/params")
const query = require("./routes/query");
const error = require("./routes/error");
const errm = require("./middleware/errhandler");
const student = require('./routes/studentRoute');
const async = require('./routes/asyncRoute');


// module imported above are explicitely needed to be told to be use in the app
app.use(connected);// method 1 to use a middleware 
app.use(express.json());
app.use("/input", input);
app.use("/dob", dob);
app.use("/home", userRoute);
app.use("/collegeinfo", quali);
app.use("/params", params);
app.use("/query", query);
app.use("/error",error);
app.use("/student",student);
app.use(errm.error);
app.use("/async",async);

//app.get() , will handle get request on the specified path
app.get("/", (req, res) => {
  var text = "Hello"; // Your variable
  var heading = "Welcome to Node Js";
  var number = 20;
  const name = "Sarthak";
  let date = todayModule.getDate();

  res.json({
    message: text,
    heading: heading,
    age: number,
    name: name,
    success: true,
    version: "1.0.0",
    date: date,
  });
});
//app.post() wil handle all the post request on the specified path, tested on postman 
app.post("/", (req, res) => {
  res.send("you just sent a post request");
});

module.exports = app;