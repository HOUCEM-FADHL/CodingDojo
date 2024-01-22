// Import the Joke model
const Joke = require("../models/joke.model");

// Export an object with methods for handling Joke-related operations
module.exports = {
    // Retrieve all jokes
    getAllJokes: (req, res) => {
        Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => res.status(500).json(err));
    },

    // Retrieve a single joke by its ID
    getOneJoke: (req, res) => {
        Joke.find({ _id: req.params.id })
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => res.status(500).json(err));
    },

    // Create a new joke
    createJoke: (req, res) => {
        const { setup, punchline } = req.body;
        Joke.create({ setup, punchline })
        .then(() => res.json("Joke added!"))
        .catch((err) => res.status(500).json(err));
    },

    // Update an existing joke by its ID
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
        { _id: req.params.id },
        {
            setup: req.body.setup,
            punchline: req.body.punchline,
        },
        { new: true, runValidators: true }
        )
        .then((joke) => res.json(joke))
        .catch((err) => res.status(500).json(err));
    },

    // Delete a joke by its ID
    deleteJoke: (req, res) => {
        Joke.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json("Joke deleted."))
        .catch((err) => res.status(500).json(err));
    },

    // Retrieve a random joke
    getRandomJoke: (req, res) => {
        Joke.countDocuments().then((count) => {
        const random = Math.floor(Math.random() * count);
        Joke.findOne()
            .skip(random)
            .exec()
            .then((doc) => res.json(doc))
            .catch((err) => res.status(500).json(err));
        });
    },
};
