import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [countOffset, setCountOffset] = useState<number>(10);

  const increment = () => {
    setCount(count + countOffset);
  };

  const decrement = () => {
    setCount(count - countOffset);
  };

  const reset = () => {
    setCount(0);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountOffset(Number(e.target.value));
  }

  return (
    <div className='container'>
      <h1 className='header'>Counter</h1>

      <p className='count'>{count}</p>

      <div className='buttons-container'>
        <button 
          onClick={increment} 
          className='button increment'
        >
          Increment
        </button>

        <button 
          onClick={decrement} 
          className='button decrement'
        >
          Decrement
        </button>
        
        <button 
          onClick={reset} 
          className='button reset'
        >
          Reset
        </button>
      </div>

      <div className='input-container'>
        <label className='label'>Offset:</label>
        <input 
        name='count-number'
        type='number'
        defaultValue={countOffset}
        onChange={handleInput}
        className='input'
      />
      </div>
    </div>
  )
}

export default App;
