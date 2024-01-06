import React, { useState } from 'react';

// TodoList component receives 'todoItems' prop
const TodoList = ({ todoItems }) => {
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
    <div className='todo-list'>
      {/* Map through todoItems to render each todo item with a checkbox */}
      {todoItems.map((item, index) => (
        <div key={index} className='todo-items'>
          {/* Display the todo item label with dynamic text decoration style */}
          <label htmlFor='checkbox' style={{ textDecoration: textStyles[index] }}>{item}</label>
          
          {/* Checkbox to toggle text decoration style on click */}
          <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" onClick={() => changeStyle(index)} />
        </div>
      ))}
    </div>
  );
}

// Export the TodoList component
export default TodoList;


// const TodoList = ({ todoItems }) => {
// const [textStyle, setTextStyle] = useState('none');
//   const changeStyle = (e) => {

//     e.target.checked?
//     setTextStyle('line-through') :
//     setTextStyle('none');

    
//   }
//   return (
//     <div className='todo-list'>
      
//       {todoItems.map((item, index) => (
//         <div key={index} className='todo-items'>
//           <label  style={{textDecoration: textStyle}}>{item}</label>
//           <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" onChange={e =>changeStyle(e)} />
//         </div>
//         ))}

//     </div>
//   );
// }
