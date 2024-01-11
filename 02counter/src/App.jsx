import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    console.log(counter);
    //counter = counter+1

    setCounter(counter + 1);
  };

  const removeValue = () => {
    if(counter > 0)
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Chai aur react</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add value</button> <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
