// Import React, useEffect, axios, and Link from React and React Router
import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Define the ProductList functional component
const ProductList = (props) => {
    // Destructure the products and setProducts props
    const { products, setProducts } = props;

    // Use useEffect to fetch all products from the server
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                // Log the response data
                console.log("res List", res);
                console.log("res.data List", res.data);
                // Set the retrieved products to the state variable
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, [setProducts]);

    // Render the list of products with Link to their details
    return (
        <div>
            <h2 className="mt-3">All Products</h2>
            {products.map((product) => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </div>
            ))}
        </div>
    );
};

// Export the ProductList component as the default export
export default ProductList;
