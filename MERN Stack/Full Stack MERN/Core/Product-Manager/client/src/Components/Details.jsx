// Import React, useEffect, useState, axios, and useParams from React
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Define the Details functional component
const Details = () => {
    // State variable to store the details of the product
    const [product, setProduct] = useState([]);
    
    // Retrieve the 'id' parameter from the URL using useParams
    const { id } = useParams();
    
    // Use useEffect to fetch the product details from the server
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("res one product:", res);
                console.log("res.data one product:", res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    // Render the product details
    return (
        <div>
            {product.map((product) => (
                <div key={product._id}>
                    <h3 className="m-3">{product.title}</h3>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
};

// Export the Details component as the default export
export default Details;
