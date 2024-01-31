// Import React and necessary components/libraries
import React, {useState} from "react";
import AuthorForm from "../Components/AuthorForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Functional component for adding an author
const AddAuthor = (props) => {
  // Destructure props to extract necessary variables and functions
  const [error, setError] = useState({});

  // Get the navigate function from the react-router-dom library
  const navigate = useNavigate();

  // Function to create a new author
  const createAuthor = (name) => {
    // Send a POST request to the server to create a new author
    axios
      .post("http://localhost:8000/api/authors/new", { name })
      .then((response) => {
        // Log the response and update the authorNames state
        console.log(response.data);

        // Navigate to the /authors route after successful creation
        navigate('/authors');

        // Reset the error state
        setError({});
      })
      .catch((error) => {
        // Log and handle errors by updating the error state
        console.log(error);
        setError(error.response.data.errors);
      });
  };

  // Render the component, using the AuthorForm component
  return (
    <div>
      <AuthorForm
        textMode="Add a new author:" // Text to display in the form
        initialName="" // Initial value for the author's name
        onSubmitProps={createAuthor} // Callback function for form submission
        error={error} // Error object to display validation errors
      />
    </div>
  );
};

// Export the AddAuthor component as the default export
export default AddAuthor;
