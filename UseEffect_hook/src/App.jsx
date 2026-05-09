import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  // 1. Runs on every render - no dependency array
  useEffect(() => {
    console.log('This runs on every render(No dependency array)');
  });

  // 2. Runs only once (on mount) - empty dependency array
  useEffect(() => {
    console.log('This runs only once (on mount) - empty dependency array');
  }, []);

  // 3. Runs when count changes - count in dependency array
  useEffect(() => {
    console.log('Count changed:', count + ' - This runs when count changes - count in dependency array');
  }, [count]);


  // 4. Cleanup function example
  useEffect(() => {
    console.log('Setting up interval to increment count every second');
    
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []); // Empty dependency array to set up interval only once
  useEffect(() => {
  console.log('Setting up interval to increment count every second');
  
  const interval = setInterval(() => {
    setCount(count => count + 1);
  }, 1000);

  // ✅ Cleanup function
  return () => {
    console.log('Cleaning up interval');
    clearInterval(interval);
  };

}, []);

  return (
  
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;