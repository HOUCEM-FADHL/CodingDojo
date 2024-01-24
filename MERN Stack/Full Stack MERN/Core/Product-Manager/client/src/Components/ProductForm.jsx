// Import React and necessary dependencies
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";

// Define the ProductForm functional component
const ProductForm = (props) => {
    const { addProduct } = props;
    // State variables to manage form input values
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // Handler function for form submission
    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Send a POST request to the server to create a new product
        axios
        .post("http://localhost:8000/api/products", {
            title,
            price,
            description,
        })
        .then((res) => {
            // Log the response data upon successful creation
            console.log("res form",res);
            console.log("res.data form",res.data);
            // Set the retrieved products to the state variable
            addProduct(res.data);
        })
        .catch((err) => console.log(err));

        // Clear the form input values after submission
        setTitle("");
        setPrice("");
        setDescription("");
    };

    // Render the form with Bootstrap components
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
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
                            type="text"
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
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
};

// Export the ProductForm component as the default export
export default ProductForm;
