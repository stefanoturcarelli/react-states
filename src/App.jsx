import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import Toggle from "./components/Toggle";
import CounterFour from "./components/CounterFour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <Toggle />
      <CounterFour />
    </>
  );
}

export default App;
