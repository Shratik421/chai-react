import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
 import Card from "./components/card"

function App(props) {
  const [count, setCount] = useState(0);

  let myObj  = {
    username:"hitesh",
    age:21
  }

  let newArr = [1,2,3]

  return (
    <>
      <div>
        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind cSs</h1>
      </div>
     <Card channel="chaiaurcode" someObject={myObj}/>
     <Card someObject={newArr} />
     <Card />
     <Card />
    </>
  );
}

export default App;
