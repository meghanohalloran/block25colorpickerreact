import ColorButton from './ColorButton';
import PickedColor from './PickedColor';
import React, { useState } from 'react';
import './App.css';

function App () {
const [selectColor, setSelectColor] = useState("null");



// const [handleClick] = setChangeColor('you changed the color');

console.log(selectColor || 'currently null');
  return (
    <div>
     <h1>Color Picker</h1>
     <PickedColor selectColor={selectColor} setSelectColor={setSelectColor}/>
     
     <ColorButton selectColor={selectColor} setSelectColor={setSelectColor}/>
    
    </div>
  );
}

export default App


// To make the button change its color when clicked, you can use React's state management to track the color. You will need to use the useState hook to store the selected color and update it when the button is clicked.

// Here's how you can do it:
// Set up state to track the color.
// Change the button's background color based on the selected color.
// Example:
// jsx
// Copy
// Edit
// import { useState } from 'react';

// function ColorButton() {
//   // Initial state is 'red'
//   const [selectedColor, setSelectedColor] = useState("red");

//   return (
//     <div>
//       {/* Button with dynamic background color */}
//       <button
//         style={{ backgroundColor: selectedColor }}
//         onClick={() => setSelectedColor(selectedColor === "red" ? "blue" : "red")}
//       >
//         Color Button {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
//       </button>
//     </div>
//   );
// }

// export default ColorButton;
