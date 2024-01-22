import React, { useState } from "react";
import TodoDelete from "./TodoDelete";
import { Card, Form, Stack } from "react-bootstrap";

// TodoList component receives todoItems and deleteItemFromTodoItems as props
const TodoList = ({ todoItems, deleteItemFromTodoItems }) => {
  // State variable for text styles with initial values based on the number of todoItems
  const [textStyles, setTextStyles] = useState(todoItems.map(() => "none"));

  // Function to toggle text styles when checkbox is clicked
  const changeStyle = (index) => {
    setTextStyles((prevStyles) => {
      const newStyles = [...prevStyles];

      // Toggle between 'none' and 'line-through' styles based on the current style
      newStyles[index] === "line-through"
        ? (newStyles[index] = "none")
        : (newStyles[index] = "line-through");

      return newStyles;
    });
  };

  // JSX structure for the TodoList component
  return (
    <div>
      {/* Map through todoItems to render each todo item with a checkbox */}
      {todoItems.map((item, index) => (
        <div key={index}>
          <Card className="m-2 p-2">
            <Stack direction="horizontal" gap={3}>
              {/* Display the todo item label with dynamic text decoration style */}
              <Card.Body
                className="me-auto"
                htmlFor="checkbox"
                style={{ textDecoration: textStyles[index] }}
              >
                {item}
              </Card.Body>
              {/* Checkbox to toggle text decoration style on click */}
              <Form.Check
                className="p-2 ms-auto"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="checkbox"
                onClick={() => changeStyle(index)}
              />
              {/* Render the TodoDelete component with deleteItemFromTodoItems and id props */}
              <TodoDelete
                className="p-2"
                deleteItemFromTodoItems={deleteItemFromTodoItems}
                id={index}
              />
            </Stack>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Export the TodoList component
export default TodoList;
