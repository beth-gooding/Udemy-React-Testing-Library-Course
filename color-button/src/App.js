import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';


  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
        >
          Change to {newButtonColor}
      </button> 
      <input 
      type="checkbox"
      defaultChecked={isDisabled}
      aria-checked={isDisabled}
      onClick={() => setIsDisabled((prevIsDisabled) => !prevIsDisabled)}/> 
    </div>
  );
}

export default App;
