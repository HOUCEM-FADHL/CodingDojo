// Importing necessary dependencies
import React, { useEffect } from "react";
import axios from "axios"; // Importing Axios for making HTTP requests
import { Link } from "react-router-dom"; // Importing Link for navigation
import DeleteButton from "./DeleteButton"; // Importing DeleteButton component
import EditButton from "./EditButton"; // Importing EditButton component

// ProductList component definition
const ProductList = (props) => {
    // Destructuring props to extract products and setProducts
    const { products, setProducts } = props;

    // useEffect hook to fetch products from the server when the component mounts
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/products")
        .then((res) => {
            // Successful response from the server
            console.log("res List", res);
            console.log("res.data List", res.data);
            // Updating the products state with the data from the server
            setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, [setProducts]); // Dependency array to run the effect only when setProducts changes

    // Function to remove a product from the list
    const removeProduct = (id) => {
        setProducts(products.filter((product) => product._id !== id));
    };

    // Rendering the ProductList component
    return (
        <div className="mb-5">
        {/* Heading for the list of products */}
        <h2 className="mt-3">All Products</h2>
        {/* Mapping through the products and rendering each product */}
        {products.map((product) => (
            <div
            key={product._id} // Using the product's _id as the key
            className="container d-flex justify-content-between align-items-center"
            >
            {/* Link to navigate to the details page of the product */}
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            {/* Container for edit and delete buttons */}
            <div className="d-flex">
                {/* EditButton component with the product's _id as a prop */}
                <EditButton id={product._id} />
                {/* DeleteButton component with the product's _id and a successCallback to update the list */}
                <DeleteButton id={product._id} successCallback={() => removeProduct(product._id)} />
            </div>
            </div>
        ))}
        </div>
    );
};

// Exporting the ProductList component as the default export
export default ProductList;


// // Import React, useEffect, axios, and Link from React and React Router
// import React, { useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

// // Define the ProductList functional component
// const ProductList = (props) => {
//     // Destructure the products and setProducts props
//     const { products, setProducts, editProduct, deleteProduct } = props;

//     // Use useEffect to fetch all products from the server
//     useEffect(() => {
//         axios
//             .get("http://localhost:8000/api/products")
//             .then((res) => {
//                 // Log the response data
//                 console.log("res List", res);
//                 console.log("res.data List", res.data);
//                 // Set the retrieved products to the state variable
//                 setProducts(res.data);
//             })
//             .catch((err) => console.log(err));
//     }, [setProducts]);

//     // Render the list of products with Link to their details
//     return (
//         <div className="mb-5">
//             <h2 className="mt-3">All Products</h2>
//             {products.map((product) => (
//                 <div
//                     key={product._id}
//                     className="container d-flex justify-content-between align-items-center"
//                 >
//                     {/* Link to navigate to the details page of the product */}
//                     <Link to={`/products/${product._id}`}>{product.title}</Link>
//                     <div>
//                         {/* Edit button to navigate to the edit page for the product */}
//                         <Button
//                             variant="outline-success"
//                             size="sm"
//                             className="ml-3"
//                             onClick={(e) => {
//                                 editProduct(product._id);
//                             }}
//                         >
//                             Edit
//                         </Button>
//                         {/* Delete button to delete the product */}
//                         <Button
//                             variant="outline-dark"
//                             size="sm"
//                             className="ml-3"
//                             onClick={(e) => {
//                                 deleteProduct(product._id);
//                             }}
//                         >
//                             Delete
//                         </Button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// // Export the ProductList component as the default export
// export default ProductList;