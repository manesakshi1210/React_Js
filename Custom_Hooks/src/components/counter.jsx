import React from "react";
// import "../App.css"; 
import { useCounter } from "../hooks/useCounter";

function Counter() {
  // step 2 - use the custom hook in your component
  const { count, increment, decrement, reset } = useCounter(0); // you can pass an initial value

  return (
    <div>
      <h2>Custom hooks</h2>
      <hr />
  <div className="counter">
      <h3>Counter App</h3>
      {/* // step 3 - use the returned values and functions from the custom hook */}
      <p>Count: {count}</p>

      {/* // step 4 - use the functions to update the state */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    </div>
  );
}

export default Counter;