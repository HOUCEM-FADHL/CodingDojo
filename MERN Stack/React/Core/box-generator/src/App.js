import React, { useState } from 'react';
import './App.css';  // Importing the main CSS file
import ColorForm from './Components/ColorForm';  // Importing the ColorForm component
import DisplayColors from './Components/DisplayColors';  // Importing the DisplayColors component

// Main App component
function App() {
  // State variable to hold the list of colors and a function to update it
  const [colorList, setColorList] = useState([]);

  // JSX structure for the App component
  return (
    <div className="App">
      {/* Render the ColorForm component with props */}
      <ColorForm 
        setColorList={setColorList}  // Pass the setColorList function as a prop
        colorList={colorList}  // Pass the colorList state as a prop
      />

      {/* Render the DisplayColors component with props */}
      <DisplayColors
        setColorList={setColorList}  // Pass the setColorList function as a prop
        colorList={colorList}  // Pass the colorList state as a prop
      />
    </div>
  );
}

// Export the App component
export default App;
