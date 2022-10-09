import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='container'>
      <h1 className='header'>Counter</h1>

      <p className='count'>{count}</p>

      <div className='buttons-container'>
        <button onClick={increment} className='button increment'>Increment</button>
        <button onClick={decrement} className='button decrement'>Decrement</button>
        <button onClick={reset} className='button reset'>Reset</button>
      </div>
    </div>
  )
}

export default App;
