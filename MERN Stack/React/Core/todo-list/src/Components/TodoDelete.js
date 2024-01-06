import React from 'react';

// TodoDelete component receives 'todoItems' and 'setTodoItems' as props
const TodoDelete = ({ todoItems, setTodoItems }) => {
    
    // Function to handle the deletion of a todo item
    const clickDelete = (e, index) => {
        e.preventDefault();

        // Update the todoItems state by filtering out the item at the specified index
        setTodoItems(todoItems.filter((_, i) => (i !== index)));
    }

    // JSX structure for the TodoDelete component
    return (
        <div className='todo-delete'>
            {/* Map through todoItems to render a delete button for each item */}
            {todoItems.map((_, index) => (
                <div key={index} className='delete'>
                    {/* Delete button with an onClick handler to trigger the deletion */}
                    <button type='submit' onClick={e => clickDelete(e, index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

// Export the TodoDelete component
export default TodoDelete;
