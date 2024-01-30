// Import React and necessary components/libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

// Functional component for rendering a form for author information
const AuthorForm = (props) => {
  // Destructure props to extract necessary variables and functions
  const { textMode, initialName, onSubmitProps, error } = props;

  // Get the navigate function from the react-router-dom library
  const navigate = useNavigate();

  // State variable for the author's name
  const [name, setName] = useState(initialName);

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    // Call the onSubmitProps function with the current name value
    onSubmitProps(name);
  };

  // Render the component
  return (
    <div className="m-3">
      {/* Link to navigate back to the authors home page */}
      <Link to="/authors">Home</Link>
      {/* Display the text mode (Add or Edit) */}
      <p className="text-info">{textMode}</p>
      <div className="border border-dark p-3">
        {/* Form for author information */}
        <form onSubmit={submitHandler}>
          <FormGroup>
            {/* Input field for the author's name */}
            <Label>Name:</Label>
            <Input
              value={name}
              type="text"
              name="name"
              id="name"
              placeholder="Author Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          {/* Display validation error message, if any */}
          {error.name && <p className="text-danger">{error.name.message}</p>}
          {/* Buttons for Cancel and Submit actions */}
          <div className="d-flex gap-2">
            <Button color="primary" onClick={(e) => navigate('/authors')}>
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the AuthorForm component as the default export
export default AuthorForm;
