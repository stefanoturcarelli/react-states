// The useReducer hook

// useReducer() = Like useState on steroids. It's perfect for managing complex
//              state logic in your React functional components.
//              Think of it as having a super-organized manager for your state.
//              With useReducer, you can handle complex state logic with ease
//              and keep your code clean and maintainable. It's especially
//              useful when you have multiple state variables or complex
//              state transitions.

// 1. Define a reducer function that handles your state transitions based on
// the action type.
// 2. useReducer takes this reducer function and an initial state, then returns
// the current state and a dispatch function.
// 3. The dispatch function is used to send actions to your reducer, which
// then updates the state accordingly.

// const [state, dispatch] = useReducer(reducer, initialState);

// The reducer function takes in the current state and an action
// and returns a new state based on the action

// Reducer function:
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error('Unknown action type');
//   }
// }

// The 'types' object is used to define the action types emulating an enum

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
