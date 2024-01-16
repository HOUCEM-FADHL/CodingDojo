import React, { useState } from 'react';
import TodoDelete from './TodoDelete';

// TodoList component receives todoItems and deleteItemFromTodoItems as props
const TodoList = ({ todoItems, deleteItemFromTodoItems }) => {
  // State variable for text styles with initial values based on the number of todoItems
  const [textStyles, setTextStyles] = useState(todoItems.map(() => 'none'));
  
  // Function to toggle text styles when checkbox is clicked
  const changeStyle = (index) => {
    setTextStyles(prevStyles => {
      const newStyles = [...prevStyles];
      
      // Toggle between 'none' and 'line-through' styles based on the current style
      newStyles[index] === 'line-through' ? newStyles[index] =  'none' : newStyles[index] = 'line-through';
      
      return newStyles;
    });
  }
  
  
  // JSX structure for the TodoList component
  return (
    <div >
      {/* Map through todoItems to render each todo item with a checkbox */}
      {todoItems.map((item, index) => (
        <div key={index} className='todo-list'>
          <div className='todo-items'>
            {/* Display the todo item label with dynamic text decoration style */}
            <label htmlFor='checkbox' style={{ textDecoration: textStyles[index] }}>{item}</label>
          
            {/* Checkbox to toggle text decoration style on click */}
            <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" onClick={() => changeStyle(index)} />
          </div>
          {/* Render the TodoDelete component with deleteItemFromTodoItems and id props */}
            <TodoDelete deleteItemFromTodoItems={deleteItemFromTodoItems} id={index} />
        </div>
      ))}
    </div>
  );
}

// Export the TodoList component
export default TodoList;