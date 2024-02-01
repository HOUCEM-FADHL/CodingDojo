// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import necessary components and functions from libraries
import { Routes, Route, Navigate } from "react-router-dom";
import AuthorsList from "./Views/AuthorsList";
import AddAuthor from "./Views/AddAuthor";
import UpdateAuthor from "./Views/UpdateAuthor";

// Main App component
function App() {
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
        <Route path="/authors" element={<AuthorsList />} />

        {/* Display the AddAuthor component for /authors/new path */}
        <Route path="/authors/new" element={<AddAuthor />} />

        {/* Display the UpdateAuthor component for /authors/:id/edit path */}
        <Route path="authors/:id/edit" element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
