// Import React, and the ProductForm and ProductList components
import React from "react";
import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";
// import { useNavigate } from "react-router-dom";

// Define the Main functional component
const Main = (props) => {
  // Destructure the products and setProducts props
  const { products, setProducts, editProduct, deleteProduct } = props;

  // Function to add a new product to the products array
  const addProduct = (product) => {
    // Update the products array with the new product
    setProducts([...products, product]);
  };

  // Render the Main component with ProductForm and ProductList components
  return (
    <div>
      {/* Heading for the application */}
      <h1 className="m-3">Product Manager</h1>

      {/* Render the ProductForm component with the addProduct function */}
      <ProductForm addProduct={addProduct} />

      {/* Render the ProductList component with products and setProducts props */}
      <ProductList
        products={products}
        setProducts={setProducts}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

// Export the Main component as the default export
export default Main;
