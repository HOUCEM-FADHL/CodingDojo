// Import necessary modules and components from React and React Router
import { Routes, Route } from "react-router-dom";
import ProductForm from "./Components/ProductForm";
import { Navigate } from "react-router-dom";

// Import the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Define the main App component
function App() {
  return (
    // Main container with text-center alignment
    <div className="text-center">
      {/* Heading for the application */}
      <h1 className="m-3">Product Manager</h1>
      
      {/* Define the routes for the application */}
      <Routes>
        {/* Redirect from the root path to the "/products" path */}
        <Route path="/" element={<Navigate to="/products" />} />
        
        {/* Route for displaying the ProductForm component when "/products" is accessed */}
        <Route path="/products" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
