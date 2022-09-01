import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [isDisabled, setIsDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button 
        style={{backgroundColor: isDisabled ? 'gray' : buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
        >
          Change to {replaceCamelWithSpaces(newButtonColor)}
      </button> 
      <input 
      type="checkbox"
      id="disable-button-checkbox"
      defaultChecked={isDisabled}
      aria-checked={isDisabled}
      onClick={() => setIsDisabled((prevIsDisabled) => !prevIsDisabled)}/> 
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
