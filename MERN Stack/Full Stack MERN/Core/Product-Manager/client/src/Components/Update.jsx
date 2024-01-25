import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Row, Col, Form } from 'react-bootstrap';

const Update = (props) => {
    // Get the 'id' parameter from the URL using useParams
    const { id } = useParams();

    // State variables to manage form input values
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    // Navigate function from react-router-dom to navigate to other pages
    const navigate = useNavigate();

    // Fetch the product details based on the 'id' when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                // Set the form input values based on the retrieved product details
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    // Function to update the product details
    const updateProduct = (e) => {
        e.preventDefault();
        // Send a PATCH request to the server to update the product
        axios.patch(`http://localhost:8000/api/products/edit/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                // Navigate back to the products page after successful update
                navigate("/products");
                setError(null);
            })
            .catch(err => {
                console.log(err)
                // Set an error message if the update request fails
                setError(err.response.data.message);
            })
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Title:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={title}
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Price:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={price}
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Description:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={description}
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Display an error message if there is an error */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button type="submit">Update</Button>
            </form>
        </div>
    )
}

// Export the Update component as the default export
export default Update;
