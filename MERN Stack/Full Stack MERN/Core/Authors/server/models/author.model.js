// Import the mongoose library
const mongoose = require("mongoose");

// Define the schema for the Author model
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an author name"],
      minlength: [3, "Author name must be at least 3 characters"],
    }
  },
  { timestamps: true }
);

// Create the Author model using the defined schema
const Author = mongoose.model("Author", AuthorSchema);

// Export the Author model
module.exports = Author;