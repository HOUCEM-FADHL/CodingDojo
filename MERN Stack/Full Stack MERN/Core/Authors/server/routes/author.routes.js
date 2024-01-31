// Import the AuthorController
const authorController = require("../controllers/author.controller");

// Define API routes for Authors operations and associate them with corresponding controller methods
module.exports = (app) => {
    app.get("/api/authors", authorController.getAuthors);
    app.get("/api/authors/:id", authorController.getOneAuthor);
    app.patch("/api/authors/:id/edit", authorController.updateAuthor);
    app.post("/api/authors/new", authorController.createAuthor);
    app.delete("/api/authors/:id", authorController.deleteAuthor);  
};