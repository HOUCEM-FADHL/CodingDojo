import React, { useState } from 'react';
import './App.css';  // Importing the main CSS file
import Header from './Components/Header';  // Importing the Header component
import Content from './Components/Content';  // Importing the Content component

// Main App component
function App() {
  // State variable for text content, and a function to update it
  const [text, setText] = useState('This is the content for tab1');

  // JSX structure for the App component
  return (
    <div className="App">
      {/* Render the Header component with 'setText' prop */}
      <Header setText={setText} />

      {/* Render the Content component with 'text' prop */}
      <Content text={text} />
    </div>
  );
}

// Export the App component
export default App;
