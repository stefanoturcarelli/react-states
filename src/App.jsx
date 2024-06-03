import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </>
  );
}

export default App;
