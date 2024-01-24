// Import the Product model
const Product = require("../models/product.model");

// Export an object with methods for handling Product-related operations
module.exports = {
    // Retrieve all products
    getProducts: (req, res) => {
        Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(500).json(err));
    },

    
    // Create a new product
    createProduct: (req, res) => {
        const { title,price,description } = req.body;
        Product.create({ title,price,description })
        .then((product) => res.json(product))
        .catch((err) => res.status(500).json(err));
    },
    // Retrieve a single Product by its ID
    getOneProduct: (req, res) => {
        Product.find({ _id: req.params.id })
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.status(500).json(err));
    },
    }