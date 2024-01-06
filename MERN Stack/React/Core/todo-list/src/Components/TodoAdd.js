import React, { useState } from 'react';

// TodoAdd component receives 'todoItems' and 'setTodoItems' as props
const TodoAdd = ({ todoItems, setTodoItems }) => {
    // State variable for the input value
    const [item, setItem] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Update todoItems state with the new item
        setTodoItems([...todoItems, item]);

        // Reset the input value
        setItem('');
    }

    // JSX structure for the TodoAdd component
    return (
        <div className="todo-add">
            {/* Form to add a new todo item */}
            <form  onSubmit={e => handleSubmit(e)}>
                {/* Input field for entering the new todo item */}
                <input id='todo-form' type="text" value={item} onChange={e => setItem(e.target.value)} placeholder="Add a new todo" />
                
                {/* Submit button to add the new todo item */}
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

// Export the TodoAdd component
export default TodoAdd;
