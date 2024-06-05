import React from "react";
import { useState } from "react";

// useReducer hook for complex state management (redux)

function Toggle() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <h2>Toggle feature with a hook</h2>
      <section className="flex align-items gap">
        <input
          type="checkbox"
          onClick={() => setVisible(!visible)}
          value={visible ? "Hide" : "Show"}
        />
        {/* {visible && <p>Toggle me on and off</p>} */}
        <h3 className={visible ? "visible" : "hidden"}>Now you see me</h3>
      </section>
    </>
  );
}

export default Toggle;
