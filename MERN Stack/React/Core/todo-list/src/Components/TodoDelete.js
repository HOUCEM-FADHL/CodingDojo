import React from "react";
import { Button } from "react-bootstrap";

// TodoDelete component receives deleteItemFromTodoItems and id as props
const TodoDelete = ({ deleteItemFromTodoItems, id }) => {
    // Function to handle the deletion of a todo item
    const clickDelete = (e) => {
        e.preventDefault();
        // delete item from todoItems
        deleteItemFromTodoItems(id);
    };

    // JSX structure for the TodoDelete component
    return (
        <div>
        {/* Delete button with an onClick handler to trigger the deletion */}
        <Button variant="dark" type="submit" onClick={(e) => clickDelete(e)}>
            Delete
        </Button>
        </div>
    );
};

// Export the TodoDelete component
export default TodoDelete;