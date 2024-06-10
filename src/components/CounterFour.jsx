// The useReducer hook

// The useReducer hook is a more powerful alternative to the useState hook.
// An object is usually the best choice for the initial state because it can
// hold multiple values.
// An object with 'named' constants
// This 'types' object emulates an enum
// The reducer function takes in the current state and an action
// and returns a new state based on the action

import React, { useReducer } from "react";

// Initial state
const initialState = { count: 0 };

const MIN_COUNT = 0;
const MAX_COUNT = 10;

// Action types
const types = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { count: state.count + 1 };
    case types.DECREMENT:
      return { count: state.count - 1 };
    case types.RESET:
      return { count: 0 };
    default:
      console.warn("Action type not recognized");
      return state;
  }
}

function CounterFour() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  const increment = () => {
    if (count < MAX_COUNT) dispatch({ type: types.INCREMENT });
  };

  const decrement = () => {
    if (count > MIN_COUNT) dispatch({ type: types.DECREMENT });
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
            disabled={count === MIN_COUNT}
          />
          <input type="text" value={count} readOnly />
          <input
            type="button"
            onClick={increment}
            value="Plus"
            disabled={count === MAX_COUNT}
          />
          <input
            type="button"
            onClick={reset}
            value="Reset"
            className="reset"
            disabled={count === MIN_COUNT}
            aria-label="Reset the counter to zero"
          />
        </div>
      </section>
    </>
  );
}

export default CounterFour;
