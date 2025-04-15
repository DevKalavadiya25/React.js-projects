import React, { useState, useEffect } from "react";
import "./App.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    // Prevent decrementing below 0
    // setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "+") {
        handleIncrement();
      }
   
    if (event.key === "-"){
      handleDecrement();
    }
    if (event.key === "0" || event.key === "r"){ 
      handleReset();
    }

    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [counter]);

  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div className="button-container">
        <button className="one" onClick={handleIncrement}>
            Incre +
          </button>
          <button className="three" onClick={handleReset}>
            Reset
          </button>
          <button className="two" disabled={counter === 0} onClick={handleDecrement}>
            Decre -
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;

