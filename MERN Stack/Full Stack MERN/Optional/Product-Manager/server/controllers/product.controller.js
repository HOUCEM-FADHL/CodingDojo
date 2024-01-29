// Import the Product model
const Product = require("../models/product.model");

// Export an object with methods for handling Product-related operations
module.exports = {
    // Create a new product
    createProduct: (req, res) => {
        const { title,price,description } = req.body;
        Product.create({ title,price,description })
        .then((product) => res.json(product))
        .catch((err) => res.status(500).json(err));
    },
    // Retrieve all products
    getProducts: (req, res) => {
        Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(500).json(err));
    },

    
    // Retrieve a single Product by its ID
    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.status(500).json(err));
    },
    
    // Update an existing product by its ID
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        },
        { new: true, runValidators: true }
        )
        .then((product) => res.json(product))
        .catch((err) => res.status(500).json(err));
    },

    // Delete a product by its ID
    deleteProduct: (req, res) => {
        Product.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json("Product deleted."))
        .catch((err) => res.status(500).json(err));
    },
    }