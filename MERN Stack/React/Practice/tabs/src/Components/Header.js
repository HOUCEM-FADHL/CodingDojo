import React, { useState } from 'react';

// Header component receives a prop 'setText' from its parent
const Header = ({ setText }) => {
  // Array of items with label and text for each tab
  const items = [
    { label: 'Tab1', text: 'This is the content for tab1' },
    { label: 'Tab2', text: 'This is the content for tab2' },
    { label: 'Tab3', text: 'This is the content for tab3' }
  ];
  
  // State variables for button colors and background colors
  const [colorBtn, setColorBtn] = useState(['white', 'black', 'black']);
  const [bgcolor, setBgcolor] = useState(['black', 'white', 'white']);
  
  // Handle button click to update text content and button styles
  const handleClick = (e, index) => {
    e.preventDefault();
    
    // Update the text content using the provided setText function
    setText(items[index].text);
    
    // Update button colors and background colors based on the clicked tab
    setColorBtn(colorBtn => colorBtn.map((color, i) => i === index ? 'white' : 'black'));
    setBgcolor(bgcolor => bgcolor.map((color, i) => i === index ? 'black' : 'white'));
  }

  // JSX structure for the Header component
  return (
    <div className='Header'>
      {/* Map through items array to render buttons for each tab */}
      {items.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: bgcolor[index], color: colorBtn[index], transition: 'all 0.5s ease'}}
          className='btn'
          type='text'
          onClick={e => handleClick(e, index)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

// Export the Header component
export default Header;


// import React,{useState} from'react';
// const Header = (props) => {
//     const { setText } = props;

//     const items= [
//         {label: 'Tab1', text: 'This is the content for tab1'},
//         {label: 'Tab2', text: 'This is the content for tab2'},
//         {label: 'Tab3', text: 'This is the content for tab3'}];

//         const [colorBtn, setColorBtn] = useState(['black', 'black', 'black']);
//         const [bgcolor, setBgcolor] = useState(['white', 'white', 'white']);

//     const handleClick0 = (e) => {
//         e.preventDefault();
//         setText(items[0].text);
//         setColorBtn(['white', 'black', 'black']);
//         setBgcolor(['black', 'white', 'white']);;
//     }
//     const handleClick1 = (e) => {
//         e.preventDefault();
//         setText(items[1].text);
//         setColorBtn(['black', 'white', 'black']);
//         setBgcolor(['white', 'black', 'white']);
//     }
//     const handleClick2 = (e) => {
//         e.preventDefault();
//         setText(items[2].text);
//         setColorBtn(['black', 'black', 'white']);
//         setBgcolor(['white', 'white', 'black']);
//     }

//     return (
//         <div className='Header'>
//             <button style={{backgroundColor:bgcolor[0],color:colorBtn[0]}} className='btn' type='text' onClick={handleClick0}>{items[0].label}</button>
//             <button style={{backgroundColor:bgcolor[1],color:colorBtn[1]}} className='btn' type='text' onClick={handleClick1}>{items[1].label}</button>
//             <button style={{backgroundColor:bgcolor[2],color:colorBtn[2]}} className='btn' type='text' onClick={handleClick2}>{items[2].label}</button>
//         </div>
//     );
// }
// export default Header;

