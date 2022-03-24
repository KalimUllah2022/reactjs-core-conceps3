
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() { 
  const [count, setCounter] = useState(10);
  const handleIncrease = () => setCounter ( count + 1 );
  const handleDecrease = () => setCounter ( count - 1 );
  // const increaseCounter = () => { 
  //   const newCount = (count + 1);
  //   setCounter(newCount);
  // }
  // const decreaseCounter = () => { 
  //   const newCount = (count - 1);
  //   setCounter(newCount);
  // }
  return (
    <div>
      <h1>Counter: { count }</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
