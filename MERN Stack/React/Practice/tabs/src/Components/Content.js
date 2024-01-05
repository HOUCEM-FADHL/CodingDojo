import React from 'react';

// Content component receives 'text' prop directly through destructuring
const Content = ({ text }) => {
    // JSX structure for the Content component
    return (
        <div className="Content">
            {/* Displaying the text content within a paragraph */}
            <p>{text}</p>
        </div>
    );
}

// Export the Content component
export default Content;
