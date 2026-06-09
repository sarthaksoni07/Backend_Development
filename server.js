const express = require('express');
const app = express();

// The port your server will listen on
const PORT = 3000;

// This is a "Route". When someone hits the root URL, this runs.
app.get('/', (req, res) => {
    res.send('Hello from your Node.js backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running! Listening on port ${PORT}`);
});