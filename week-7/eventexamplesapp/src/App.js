import React, { useState } from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Handling in React</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <hr />

      <button onClick={handleClick}>Synthetic Event: OnPress</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
