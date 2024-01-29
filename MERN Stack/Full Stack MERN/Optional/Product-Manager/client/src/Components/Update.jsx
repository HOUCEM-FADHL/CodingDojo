// Importing necessary dependencies
import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing Axios for making HTTP requests
import { useNavigate, useParams } from "react-router-dom"; // Importing useNavigate and useParams for handling route parameters and navigation
import ProductForm from "./ProductForm"; // Importing ProductForm component

// Update component definition
const Update = (props) => {
    // Extracting the 'id' parameter from the route
    const { id } = useParams();

    // State for managing the product details, errors, and loading status
    const [product, setProduct] = useState({});
    const [error, setError] = useState({});
    const [loaded, setLoaded] = useState(false);

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // useEffect hook to fetch details of the product when the component mounts
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            // Successful response from the server
            setProduct(res.data);
            setLoaded(true);
        })
        .catch((err) => console.log(err));
    }, [id]); // Dependency array to run the effect only when 'id' changes

    // Function to update a product
    const updateProduct = (title, price, description) => {
        axios
        .patch(`http://localhost:8000/api/products/edit/${id}`, {
            title,
            price,
            description,
        })
        .then((res) => {
            // Successful response from the server after updating the product
            console.log("updated data: ", res.data);
            // Navigate back to the products page
            navigate("/products");
            // Clearing any previous errors
            setError({});
            // Resetting the loaded status to false
            setLoaded(false);
        })
        .catch((err) => {
            // Error response from the server
            console.log(err);
            // Updating the error state with validation errors
            setError(err.response.data.errors);
        });
    };

    // Rendering the Update component
    return (
        <div>
        <h1>Update a Product</h1>
        {/* Displaying the ProductForm component when the product details are loaded */}
        {loaded && (
            <ProductForm
            onSubmitProps={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
            error={error}
            formMode="update"
            />
        )}
        </div>
    );
};

// Exporting the Update component as the default export
export default Update;


// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate, useParams } from "react-router-dom";

// import { Button, Row, Col, Form } from 'react-bootstrap';

// const Update = (props) => {
//     // Get the 'id' parameter from the URL using useParams
//     const { id } = useParams();

//     // State variables to manage form input values
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState(1);
//     const [description, setDescription] = useState("");
//     const [error, setError] = useState({});

//     // Navigate function from react-router-dom to navigate to other pages
//     const navigate = useNavigate();

//     // Fetch the product details based on the 'id' when the component mounts
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products/${id}`)
//             .then(res => {
//                 // Set the form input values based on the retrieved product details
//                 setTitle(res.data.title);
//                 setPrice(res.data.price);
//                 setDescription(res.data.description);
//             })
//             .catch(err => console.log(err))
//     }, [id]);

//     // Function to update the product details 
//     const updateProduct = (e) => {
//         e.preventDefault();
//         // Send a PATCH request to the server to update the product
//         axios.patch(`http://localhost:8000/api/products/edit/${id}`, {
//             title,
//             price,
//             description
//         })
//             .then(res => {
//                 console.log(res);
//                 // Navigate back to the products page after successful update
//                 navigate("/products");
//                 setError({});
//             })
//             .catch(err => {
//                 console.log(err)
//                 // Set an error message if the update request fails
//                 setError(err.response.data.errors);
//             })
//     }

//     return (
//         <div>
//             <h1>Update a Product</h1>
//             <form onSubmit={updateProduct}>
//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         Title:
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control
//                             value={title}
//                             name='title'
//                             type="text"
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                     </Col>
//                 </Form.Group>
//                 {/* Display an error message if there is an error */}
//                 {error.title?<p className="text-danger">{error.title.message}</p>:null}
//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         Price:
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control
//                             value={price}
//                             name='price'
//                             type="number"
//                             onChange={(e) => setPrice(e.target.value)}
//                         />
//                     </Col>
//                 </Form.Group>
//                 {/* Display an error message if there is an error */}
//                 {error.price?<p className="text-danger">{error.price.message}</p>:null}
//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         Description:
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control
//                             value={description}
//                             name='description'
//                             type="text"
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </Col>
//                 </Form.Group>
//                 {/* Display an error message if there is an error */}
//                 {error.description?<p className="text-danger">{error.description.message}</p>:null}
//                 <Button type="submit">Update</Button>
//             </form>
//         </div>
//     )
// }

// // Export the Update component as the default export
// export default Update;