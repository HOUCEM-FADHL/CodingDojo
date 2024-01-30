// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import necessary components and functions from libraries
import { Routes, Route, Navigate } from "react-router-dom";
import AuthorsList from "./Components/AuthorsList";
import AddAuthor from "./Components/AddAuthor";
import UpdateAuthor from "./Components/UpdateAuthor";
import { useState } from "react";

// Main App component
function App() {
  // State variables using React Hooks
  const [authorNames, setAuthorNames] = useState([]);
  const [error, setError] = useState({});

  // Render the main component
  return (
    <div>
      {/* Page title */}
      <h1 className="text-center">Favorite authors</h1>

      {/* Define the routes for navigation */}
      <Routes>
        {/* Redirect the root path to /authors */}
        <Route path="/" element={<Navigate to="/authors" />} />

        {/* Display the AuthorsList component for /authors path */}
        <Route
          path="/authors"
          element={
            <AuthorsList
              authorNames={authorNames}
              setAuthorNames={setAuthorNames}
            />
          }
        />

        {/* Display the AddAuthor component for /authors/new path */}
        <Route
          path="/authors/new"
          element={
            <AddAuthor
              authorNames={authorNames}
              setAuthorNames={setAuthorNames}
              error={error}
              setError={setError}
            />
          }
        />

        {/* Display the UpdateAuthor component for /authors/:id/edit path */}
        <Route
          path="authors/:id/edit"
          element={<UpdateAuthor error={error} setError={setError} />}
        />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
