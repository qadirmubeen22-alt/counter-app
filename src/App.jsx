 
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="container">
      <div className="counter-box">
        <h1>{count}</h1>
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <button onClick={() => setCount(count - 1)}>
          -
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
