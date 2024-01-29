// Importing necessary dependencies
import React, { useState } from "react";
import ProductForm from "../Components/ProductForm"; // Importing ProductForm component
import ProductList from "../Components/ProductList"; // Importing ProductList component
import axios from "axios"; // Importing Axios for making HTTP requests

// Main component definition
const Main = (props) => {
  // State for managing the list of products and errors
  const [products, setProducts] = useState([]); // State for products
  const [error, setError] = useState({}); // State for errors during form submission

  // Function to create a new product
  const createProduct = (title, price, description) => {
    // Making a POST request to the server to create a new product
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        // Successful response from the server
        console.log("res form", res);
        console.log("res.data form", res.data);
        // Updating the products state with the newly created product
        setProducts([...products, res.data]);
        // Clearing any previous errors
        setError({});
      })
      .catch((err) => {
        // Error response from the server
        console.log(err.response.data.errors);
        // Updating the error state with the validation errors from the server
        setError(err.response.data.errors);
      });
  };

  // Rendering the main component
  return (
    <div>
      {/* Heading for the Product Manager */}
      <h1 className="m-3">Product Manager</h1>

      {/* ProductForm component for adding new products */}
      <ProductForm
        onSubmitProps={createProduct} // Passing the createProduct function as a prop
        initialTitle="" // Initial value for the product title
        initialPrice={1} // Initial value for the product price
        initialDescription="" // Initial value for the product description
        error={error} // Passing the error state as a prop for displaying validation errors
        formMode="create"
      />

      {/* ProductList component for displaying the list of products */}
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

// Exporting the Main component as the default export
export default Main;


// // Import React, and the ProductForm and ProductList components
// import React from "react";
// import ProductForm from "../Components/ProductForm";
// import ProductList from "../Components/ProductList";
// // import { useNavigate } from "react-router-dom";

// // Define the Main functional component
// const Main = (props) => {
//   // Destructure the products and setProducts props
//   const { products, setProducts, editProduct, deleteProduct } = props;

//   // Function to add a new product to the products array
//   const addProduct = (product) => {
//     // Update the products array with the new product
//     setProducts([...products, product]);
//   };

//   // Render the Main component with ProductForm and ProductList components
//   return (
//     <div>
//       {/* Heading for the application */}
//       <h1 className="m-3">Product Manager</h1>

//       {/* Render the ProductForm component with the addProduct function */}
//       <ProductForm addProduct={addProduct} />

//       {/* Render the ProductList component with products and setProducts props */}
//       <ProductList
//         products={products}
//         setProducts={setProducts}
//         editProduct={editProduct}
//         deleteProduct={deleteProduct}
//       />
//     </div>
//   );
// };

// // Export the Main component as the default export
// export default Main;