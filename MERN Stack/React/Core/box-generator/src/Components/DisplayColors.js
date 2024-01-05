import React from 'react';

// Importing CSS module for styling
import styles from './Box.module.css';

// DisplayColors component receives colorList as a prop
const DisplayColors = (props) => {
    // Destructuring the colorList prop
    const { colorList } = props;

    // Log the colorList to the console
    console.log('color list: ', colorList);

    // JSX structure for the DisplayColors component
    return (
        <div className={styles.container}>
            {/* Mapping through the colorList array to display each color */}
            {colorList.map((newColor, id) => (
                // Each color is represented by a box with specific styles
                <div
                    className={styles.box}
                    // Inline styles to set color, width, and height
                    style={{
                        '--color': newColor.color,
                        '--width': `${parseInt(newColor.width)}px`,
                        '--height': `${parseInt(newColor.height)}px`,
                    }}
                    key={id}
                >
                </div>
            ))}
        </div>
    );
};

// Export the DisplayColors component
export default DisplayColors;
