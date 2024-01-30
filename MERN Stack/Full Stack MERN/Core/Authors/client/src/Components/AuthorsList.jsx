// Import React and necessary components/libraries
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Button } from "reactstrap";
import axios from "axios";
import "../App.css";

// Functional component for displaying a list of authors
const AuthorsList = (props) => {
    // Destructure props to extract necessary variables and functions
    const { authorNames, setAuthorNames } = props;

    // State variables
    const [sorted, setSorted] = useState([]);
    
    // Get the navigate function from the react-router-dom library
    const navigate = useNavigate();

    // Fetch the list of authors when the component mounts
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data);
            setAuthorNames(res.data);
            // Sort the authors alphabetically by name and update the sorted state
            const sortedObjects = res.data.slice().sort((a, b) => a.name.localeCompare(b.name))
            console.log("SOb: ", sortedObjects);
            setSorted(sortedObjects);
        })
        .catch((err) => console.log(err));
    }, [setAuthorNames]);

    // Function to delete an author
    const deleteAuthor = (e, id) => {
        e.preventDefault();
        console.log(id);
        axios
        .delete("http://localhost:8000/api/authors/" + id)
        .then((response) => {
            console.log(response.data);
            // Update both authorNames and sorted after deleting an author
            const updatedAuthors = authorNames.filter((author) => author._id !== id);
            setAuthorNames(updatedAuthors);
            setSorted(updatedAuthors.slice().sort((a, b) => a.name.localeCompare(b.name)));
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // Render the component
    return (
        <div className="m-3">
        {/* Link to navigate to the page for adding a new author */}
        <Link to="/authors/new">Add an author</Link>
        {/* Display a message indicating the purpose of the list */}
        <p className="text-info">We have quotes by:</p>
        <div>
            {/* Table for displaying the list of authors */}
            <Table bordered striped>
            <thead>
                <tr>
                <th>Author</th>
                <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((author) => (
                <tr key={author._id}>
                    <td>{author.name}</td>
                    <td className="d-flex gap-2">
                    {/* Button to navigate to the page for editing an author */}
                    <Button
                        className="edit-button"
                        onClick={() => navigate(`/authors/${author._id}/edit`)}
                    >
                        Edit
                    </Button>
                    {/* Button to delete an author */}
                    <Button
                        className="delete-button"
                        onClick={(e) => deleteAuthor(e, author._id)}
                    >
                        Delete
                    </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </div>
    );
};

// Export the AuthorsList component as the default export
export default AuthorsList;
