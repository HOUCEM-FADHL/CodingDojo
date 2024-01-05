import React, { useState } from 'react';

// ColorForm component receives props, including colorList and setColorList
const ColorForm = (props) => {
    // Destructuring props to get colorList and setColorList
    const { colorList, setColorList } = props;

    // State variables for color, height, and width with their respective setters
    const [color, setColor] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new color object with the current values
        let newColor = { color, height, width };

        // Log the new color object to the console
        console.log('new color: ', newColor);

        // Update the colorList state with the new color object
        setColorList([...colorList, newColor]);

        // Reset the state variables to clear the form
        setColor('');
        setHeight('');
        setWidth('');
    };

    // JSX structure for the ColorForm component
    return (
        <div>
            <form className="color-form" onSubmit={handleSubmit}>
                <div>
                    {/* Input for Color with value and onChange handlers */}
                    <span>Color</span>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    {/* Input for Height with value and onChange handlers */}
                    <span>Height</span>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    {/* Input for Width with value and onChange handlers */}
                    <span>Width</span>
                    <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                {/* Button to submit the form */}
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

// Export the ColorForm component
export default ColorForm;
