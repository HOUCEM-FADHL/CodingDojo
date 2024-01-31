// Import React and necessary components/libraries
import React, { useEffect, useState } from "react";
import AuthorForm from "./AuthorForm";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

// Functional component for updating an author
const UpdateAuthor = () => {
  // Destructure props to extract necessary variables and functions
  const [error, setError] = useState({});

  // Get the "id" parameter from the URL using react-router-dom's useParams hook
  const { id } = useParams();

  // State variables
  const [authorName, setAuthorName] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [exists, setExists] = useState(true);

  // Get the navigate function from the react-router-dom library
  const navigate = useNavigate();

  // Fetch author data when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthorName(res.data);
        console.log("res noexist: ", res.data);
        setLoaded(true);
        res.data === null ? setExists(false) : setExists(true);
      })
      .catch((err) => {
        console.log("err noexist", err.response.data);
        !err.response.data.errors ? setExists(false) : setExists(true);
      });
  }, [id]);

  // Function to edit/update the author
  const editAuthor = (name) => {
    console.log(name);
    axios
      .patch(`http://localhost:8000/api/authors/${id}/edit`, { name })
      .then((response) => {
        console.log("updated:", response.data);
        setLoaded(false);
        // Navigate back to the previous page after successful update
        navigate(-1);
        setError({});
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.errors);
      });
  };

  // Render the component based on the existence of the author
  return (
    <div>
      {exists ? (
        loaded && (
          <AuthorForm
            textMode="Edit this author:" // Text to display in the form
            initialName={authorName.name} // Initial value for the author's name
            onSubmitProps={editAuthor} // Callback function for form submission
            error={error} // Error object to display validation errors
          />
        )
      ) : (
        // Display a message if the author does not exist
        <div>
          <h2 className="text-danger">
            We're sorry, but we could not find the author you are looking for.
            Would you like to add this author to our database?
          </h2>
          <Link to="/authors/new">Add an author</Link>
        </div>
      )}
    </div>
  );
};

// Export the UpdateAuthor component as the default export
export default UpdateAuthor;
