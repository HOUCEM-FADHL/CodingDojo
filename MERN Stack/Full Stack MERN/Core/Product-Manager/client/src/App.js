// Import necessary modules and components from React and React Router
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Import the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Main and Details components
import Main from "./Components/Main";
import Details from "./Components/Details";

// Import useState from React
import { useState } from "react";

// Define the main App component
function App() {
  // State variable to manage products data
  const [products, setProducts] = useState([]);

  return (
    // Main container with text-center alignment
    <div className="text-center">
      
      {/* Define the routes for the application */}
      <Routes>
        {/* Redirect from the root path to the "/products" path */}
        <Route path="/" element={<Navigate to="/products" />} />
        
        {/* Route for displaying the Main component when "/products" is accessed */}
        <Route path="/products" element={<Main products={products} setProducts={setProducts} />} />
        
        {/* Route for displaying the Details component when "/products/:id" is accessed */}
        <Route path="/products/:id" element={<Details products={products} />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
