// Import the mongoose library
const mongoose = require('mongoose');

// Connect to the MongoDB database using the specified connection string
mongoose.connect('mongodb://127.0.0.1:27017/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // If the connection is successful, log a message
    .then(() => console.log('Established a connection to the database'))
    // If an error occurs during the connection, log an error message
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
