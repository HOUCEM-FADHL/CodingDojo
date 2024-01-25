// Import React, useEffect, useState, axios, and useParams from React
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

// Define the Details functional component
const Details = (props) => {
    const { editProduct, deleteProduct } = props;

    // State variable to store the details of the product
    const [product, setProduct] = useState([]);

    // Retrieve the 'id' parameter from the URL using useParams
    const { id } = useParams();

    // Use useEffect to fetch the product details from the server
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                // Log the response data
                console.log("res one product:", res);
                console.log("res.data one product:", res.data);
                // Set the product details to the state variable
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            {product.map((product) => (
                <div key={product._id}>
                    {/* Display product details */}
                    <h3 className="m-3">{product.title}</h3>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>

                    {/* Edit and Delete buttons */}
                    <Button
                        variant="outline-success"
                        size="sm"
                        className="ml-3"
                        onClick={() => editProduct(product._id)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outline-dark"
                        size="sm"
                        className="ml-3"
                        onClick={(e) => deleteProduct(product._id)}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
};

// Export the Details component as the default export
export default Details;
