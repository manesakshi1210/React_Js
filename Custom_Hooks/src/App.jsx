import React from "react";
import "./App.css";
import Counter from "./components/counter";

// import the custom hook - from hooks folder
// import { useCounter } from "./hooks/useCounter";


// step 1 - create a custom hook
// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(initialValue);
//   return { count, increment, decrement, reset };
// }


function App() {
  // step 2 - use the custom hook in your component
  // const { count, increment, decrement, reset } = useCounter(0); // you can pass an initial value

  return (
    <div>
      {/* <h2>Custom hooks</h2>
      <hr />
  <div className="counter">
      <h3>Counter App</h3>
      {/* // step 3 - use the returned values and functions from the custom hook */}
      {/* <p>Count: {count}</p> */}

      {/* // step 4 - use the functions to update the state */}
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
    {/* </div> */}
    

    <Counter />
    </div>
  );
}

export default App;


