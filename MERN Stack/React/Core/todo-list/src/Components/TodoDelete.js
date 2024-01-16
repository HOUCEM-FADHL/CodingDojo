import React from 'react';

// TodoDelete component receives deleteItemFromTodoItems and id as props
const TodoDelete = ({ deleteItemFromTodoItems,id }) => {
    
    // Function to handle the deletion of a todo item
    const clickDelete = (e) => {
        e.preventDefault();
        // delete item from todoItems
        deleteItemFromTodoItems(id);
    }

    // JSX structure for the TodoDelete component
    return (
        <div className='todo-delete'>
                    {/* Delete button with an onClick handler to trigger the deletion */}
                    <button type='submit' onClick={e => clickDelete(e)}>Delete</button>
        </div>
    );
}

// Export the TodoDelete component
export default TodoDelete;
