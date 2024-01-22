import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoAdd from "./Components/TodoAdd";
import "bootstrap/dist/css/bootstrap.min.css";

// Main App component
function App() {
  // State variable for managing todo items
  const [todoItems, setTodoItems] = useState([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoItems(JSON.parse(storedTodos));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Update todoItems state with the new item and save to localStorage
  const addItemToTodoItems = (newItem) => {
    setTodoItems([...todoItems, newItem]);
    localStorage.setItem("todos", JSON.stringify([...todoItems, newItem]));
  };

  // Update the todoItems state by filtering out the item at the specified index and save to localStorage
  const deleteItemFromTodoItems = (index) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
    localStorage.setItem("todos", JSON.stringify(todoItems.filter((_, i) => i !== index)));
  };

  // JSX structure for the App component
  return (
    <div>
      <div className="border border-dar m-5 bg-secondary rounded">
        {/* Heading for the Todo List */}
        <h1 className="text-warning text-center font-weight-bold mt-3">
          Todo List
        </h1>

        {/* Render the TodoAdd component with addItemToTodoItems props */}
        <TodoAdd addItemToTodoItems={addItemToTodoItems} />

        {/* Render the TodoList for displaying the list and delete buttons */}
        <TodoList
          todoItems={todoItems}
          deleteItemFromTodoItems={deleteItemFromTodoItems}
        />
      </div>
    </div>
  );
}

// Export the App component
export default App;
