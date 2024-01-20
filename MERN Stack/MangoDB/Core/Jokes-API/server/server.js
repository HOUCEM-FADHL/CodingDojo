// Import the express library
const express = require("express");
const app = express();

// Connect to the MongoDB database using the configuration in mongoose.config.js
require("./config/mongoose.config");

// Enable JSON and URL-encoded parsing middleware for incoming requests
app.use(express.json(), express.urlencoded({ extended: true }));

// Include and configure routes for Joke operations
const AllMyJokesRoutes = require("./routes/joke.routes");
AllMyJokesRoutes(app);

// Start the server and listen on port 8000
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
