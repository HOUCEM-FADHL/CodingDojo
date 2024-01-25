// Import necessary modules and components from React and React Router
import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

// Import useState from React
import { useState } from "react";

// Import the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Main and Details components
import Main from "./Components/Main";
import Details from "./Components/Details";
import Update from "./Components/Update";

// Define the main App component
function App() {
  // State variable to manage products data
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Function to navigate to the edit page for a specific product
  const editProduct = (id) => {
    navigate(`/products/edit/${id}`);
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    console.log(id);
    // Send a DELETE request to the server
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log("res delete product:", res);
        console.log("res.data delete product:", res.data);
        // Update the state to remove the deleted product
        setProducts(products.filter((product) => product._id !== id));
        // Navigate back to the products page
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    // Main container with text-center alignment
    <div className="text-center">
      {/* Define the routes for the application */}
      <Routes>
        {/* Redirect from the root path to the "/products" path */}
        <Route path="/" element={<Navigate to="/products" />} />

        {/* Route for displaying the Main component when "/products" is accessed */}
        <Route
          path="/products"
          element={
            <Main
              products={products}
              setProducts={setProducts}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
            />
          }
        />

        {/* Route for displaying the Details component when "/products/:id" is accessed */}
        <Route
          path="/products/:id"
          element={
            <Details editProduct={editProduct} deleteProduct={deleteProduct} />
          }
        />
        {/* Route for displaying the Update component when "/products/edit/:id" is accessed */}
        <Route path="/products/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
