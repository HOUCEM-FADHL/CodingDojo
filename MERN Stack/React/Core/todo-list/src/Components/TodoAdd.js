import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

// TodoAdd component addItemToTodoItems as props
const TodoAdd = ({ addItemToTodoItems }) => {
    // State variable for the input value
    const [item, setItem] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //add item to todoItems
        addItemToTodoItems(item);

        // Reset the input value
        setItem("");
    };

    // JSX structure for the TodoAdd component
    return (
        <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
            {/* Form to add a new todo item */}
            <Form.Group className="m-5">
            {/* Input field for entering the new todo item */}
            <Stack direction="horizontal" gap={3}>
                <Form.Control
                className="me-auto"
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add a new todo"
                />
                {/* Submit button to add the new todo item */}
                <Button variant="warning" className="p-2" type="submit">
                Add
                </Button>
            </Stack>
            </Form.Group>
        </Form>
        </div>
    );
};

// Export the TodoAdd component
export default TodoAdd;
