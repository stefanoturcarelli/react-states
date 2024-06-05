import React from "react";
import { useState } from "react";

function CounterThree() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Functional component with a useState hook (best)</h2>
      <section className="flex">
        <div className="counter flex gap">
          <input
            type="button"
            onClick={decrement}
            value="Minus"
            disabled={count === 0}
          />
          <input type="text" value={count} readOnly />
          <input
            type="button"
            onClick={increment}
            value="Plus"
            disabled={count === 9}
          />
          <input
            type="button"
            onClick={() => setCount(0)}
            value="Reset"
            className="reset"
            disabled={count === 0}
          />
        </div>
      </section>
    </>
  );
}

export default CounterThree;
