import React from "react";
import { useReducer } from "react";

// The reducer hook

// An object is usually the best choice for the initial state because it can
// hold multiple values.
const initialState = {
  count: 0,
};

const MIN_COUNT = 0;
const MAX_COUNT = 10;

// An object with 'named' constants
// This 'types' object emulates an enum
const types = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

// The reducer function takes in the current state and an action
// and returns a new state based on the action
function reducer(state, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { count: state.count + 1 };
    case types.DECREMENT:
      return { count: state.count - 1 };
    case types.RESET:
      return { count: 0 };
    default:
      // Print a warning to the console if the action type is not recognized
      console.warn("Action type not recognized");
      return state;
  }
}

function CounterFour() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    if (state.count < MAX_COUNT) dispatch({ type: types.INCREMENT });
  };

  const decrement = () => {
    if (state.count > MIN_COUNT) dispatch({ type: types.DECREMENT });
  };

  const reset = () => {
    dispatch({ type: types.RESET });
  };

  return (
    <>
      <h2>Counter with useReducer</h2>
      <section className="flex">
        <div className="counter flex gap">
          <input
            type="button"
            onClick={decrement}
            value="Minus"
            disabled={state.count === MIN_COUNT}
          />
          <input type="text" value={state.count} readOnly />
          <input
            type="button"
            onClick={increment}
            value="Plus"
            disabled={state.count === MAX_COUNT}
          />
          <input
            type="button"
            onClick={reset}
            value="Reset"
            className="reset"
            disabled={state.count === MIN_COUNT}
            aria-label="Reset the counter to zero"
          />
        </div>
      </section>
    </>
  );
}

export default CounterFour;
