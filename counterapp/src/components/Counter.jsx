import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  
  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter App</h2>
      <hr />
      <h3>Count : {count}</h3>

      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;