// Import the ProductController
const ProductController = require("../controllers/product.controller");

// Define API routes for Products operations and associate them with corresponding controller methods
module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.getProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.patch("/api/products/edit/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);  
};