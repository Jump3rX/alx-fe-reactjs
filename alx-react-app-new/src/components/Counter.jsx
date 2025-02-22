import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increaseCount()}>Increment</button>
      <button onClick={() => decreaseCount()}>Decrement</button>
      <button onClick={() => resetCount()}>Reset</button>
    </div>
  );
}

export default Counter;
