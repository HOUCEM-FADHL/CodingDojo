import React, { useState } from 'react';
import './App.css'; 
import TodoList from './Components/TodoList'; 
import TodoAdd from './Components/TodoAdd';

// Main App component
function App() {
  // State variable for managing todo items
  const [todoItems, setTodoItems] = useState([]);
  
// Update todoItems state with the new item
  const addItemToTodoItems = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  }

// Update the todoItems state by filtering out the item at the specified index
  const deleteItemFromTodoItems = (index) => {
    setTodoItems(todoItems.filter((_, i) => (i !== index)));
  }

  // JSX structure for the App component
  return (
    <div>
      <div className='App'>
        {/* Heading for the Todo List */}
        <h1>Todo List</h1>
        
        {/* Render the TodoAdd component with addItemToTodoItems props */}
        <TodoAdd addItemToTodoItems={addItemToTodoItems} />

        {/* Render the TodoList for displaying the list and delete buttons */}
          <TodoList todoItems={todoItems} deleteItemFromTodoItems={deleteItemFromTodoItems} />
      </div>
    </div>
  );
}

// Export the App component
export default App;
