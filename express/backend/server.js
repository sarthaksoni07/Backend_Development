const express = require("express");//import the express module from the node 
const app = express();// create a local app of the module and use it
const cors = require("cors");
app.use(cors());

// the below lines are what we are kind of importing into our app, routes and middleware are imported here
const userRoute = require("./routes/home");
const quali = require("./routes/qualification");
const todayModule = require("./routes/today");
const dob = require("./routes/dob");
const input = require("./routes/input");
const connected = require("./middleware/connected");
const params= require("./routes/params")


// module imported above are explicitely needed to be told to be use in the app
app.use(connected)// method 1 to use a middleware 
app.use(express.json());
app.use("/input", input);
app.use("/dob", dob);
app.use("/home", userRoute);
app.use("/collegeinfo", quali);
app.use("/params", params);

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
app.post("/", (res, req) => {
  req.end("you just sent a post request");
});


//app.listen is where we command the node to listen to the port we hafe just assigned it 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running! Listening on port ${PORT}`);
});
