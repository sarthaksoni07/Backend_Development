const express = require('express');
const app = express();
const userRoute = require('./routes/home')
const cors = require('cors'); // 1. Import CORS
app.use(cors());
// The port your server will listen on
const PORT = 3000;
app.use('/home', userRoute);
// This is a "Route". When someone hits the root URL, this runs.
app.get('/', (req, res) => {
    var text = "Hello"; // Your variable
    var heading = "Welcome to Node Js";
    var number = 20;
    const name = "Sarthak";

    
    // Use res.json() and pass it a JavaScript object {}
    res.json({
        message: text,
        heading:heading,
        age : number , 
        name : name,
        success: true,
        version: "1.0.0"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running! Listening on port ${PORT}`);
});