import React, { useState } from 'react';
import './App.css'; 
import TodoList from './Components/TodoList'; 
import TodoAdd from './Components/TodoAdd';
import TodoDelete from './Components/TodoDelete';

// Main App component
function App() {
  // State variable for managing todo items
  const [todoItems, setTodoItems] = useState([]);

  // JSX structure for the App component
  return (
    <div className="App">
      {/* Heading for the Todo List */}
      <h1>Todo List</h1>
      
      {/* Render the TodoAdd component with todoItems and setTodoItems props */}
      <TodoAdd todoItems={todoItems} setTodoItems={setTodoItems} />

      {/* Container for displaying the list and delete buttons */}
      <div className='list-container'>
        {/* Render the TodoList component with todoItems prop */}
        <TodoList todoItems={todoItems} />

        {/* Render the TodoDelete component with todoItems and setTodoItems props */}
        <TodoDelete todoItems={todoItems} setTodoItems={setTodoItems} />
      </div>
    </div>
  );
}

// Export the App component
export default App;
