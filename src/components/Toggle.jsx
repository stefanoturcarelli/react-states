import React from "react";
import { useState } from "react";

// useReducer hook for complex state management (redux)

function Toggle() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="flex">
      <h2>Toggle feature with a hook</h2>
      <input
        type="checkbox"
        onClick={() => setVisible(!visible)}
        value={visible ? "Hide" : "Show"}
      />
      {visible && <p>Toggle me on and off</p>}
    </section>
  );
}

export default Toggle;
