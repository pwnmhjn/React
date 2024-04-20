import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    console.log(count);
  };
  const removeValue = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>Hi Pawan</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add value :{count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
