import { useState } from "react";
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
    counter++
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter == 0) {
      return;
    }
    setCounter(counter - 1)
  }

  return (
    
    <div className="counter-container">
      <h1>ReactJS</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default App
