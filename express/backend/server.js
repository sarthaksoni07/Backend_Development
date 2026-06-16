const express = require('express');
const app = express();
const userRoute = require('./routes/home')
const quali = require('./routes/qualification')
const cors = require('cors'); // 1. Import CORS
const todayModule = require('./routes/today');
const dob = require('./routes/dob');
const input = require('./routes/input');
app.use(cors());
// The port your server will listen on
const PORT = 3000;
app.use(express.json());
app.use('/input', input);
app.use('/dob',dob);
app.use('/home', userRoute);
app.use('/collegeinfo',quali);

// This is a "Route". When someone hits the root URL, this runs.
app.get('/', (req, res) => {
    var text = "Hello"; // Your variable
    var heading = "Welcome to Node Js";
    var number = 20;
    const name = "Sarthak";
    let date = todayModule.getDate();
    
    
    // Use res.json() and pass it a JavaScript object {}
    res.json({
        message: text,
        heading:heading,
        age : number , 
        name : name,
        success: true,
        version: "1.0.0",
        date:date
    });
});
app.post('/', (res,req)=>{
    req.end("you just sent a post request");
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running! Listening on port ${PORT}`);
});