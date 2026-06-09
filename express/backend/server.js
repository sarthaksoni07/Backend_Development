const express = require('express');
const app = express();
const cors = require('cors'); // 1. Import CORS
app.use(cors());
// The port your server will listen on
const PORT = 3000;

// This is a "Route". When someone hits the root URL, this runs.
app.get('/', (req, res) => {
    var text = "Hellwo"; // Your variable
    var heading = "welcome to node js";
    var number = 20;
    const name = "sarthak";

    
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