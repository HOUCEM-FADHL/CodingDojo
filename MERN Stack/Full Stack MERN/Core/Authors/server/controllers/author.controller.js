// Import the Author model
const Author = require("../models/author.model");

// Export an object with methods for handling Author-related operations
module.exports = {
    // Create a new author
    createAuthor: (req, res) => {
        const { name } = req.body;
        Author.create({ name })
        .then((author) => res.json(author))
        .catch((err) => res.status(500).json(err));
    },
    // Retrieve all authors
    getAuthors: (req, res) => {
        Author.find()
        .then((authors) => res.json(authors))
        .catch((err) => res.status(500).json(err));
    },

    
    // Retrieve a single Author by its ID
    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) => res.status(500).json(err));
    },
    
    // Update an existing author by its ID
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name
        },
        { new: true, runValidators: true }
        )
        .then((author) => res.json(author))
        .catch((err) => res.status(500).json(err));
    },

    // Delete a author by its ID
    deleteAuthor: (req, res) => {
        Author.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json("Product deleted."))
        .catch((err) => res.status(500).json(err));
    },
    }