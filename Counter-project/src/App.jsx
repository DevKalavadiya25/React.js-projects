import React, { useState } from "react";
import "./App.css";


const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);

  };
  const handleRest = () => {
    setCounter(0);
  }
  return (
    <div>
      <div className="container">

        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div className="button-container">
          <button className="one" onClick={handleIncrement}>Incre +</button>
          <button className="two" disabled={counter === 0} onClick={handleDecrement}>Decre -</button>
          <button className="three" onClick={handleRest}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

