// Import the ProductController
const ProductController = require("../controllers/product.controller");

// Define API routes for Products operations and associate them with corresponding controller methods
module.exports = (app) => {
    app.get("/api/products", ProductController.getProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getOneProduct);
};