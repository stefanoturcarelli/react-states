// This is a class component

// Class components are stateful components.

// Class components have a state that can be updated. The state is an object
// that holds some information that may change over the lifetime of the
// component.

import React, { Component } from "react";

class CounterTwo extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <>
        <h2>Class component with a state object (better)</h2>
        <section className="flex">
          <div className="counter flex gap">
            <input type="button" onClick={this.decrement} value="Minus" />
            <input type="text" value={this.state.count} readOnly />
            <input type="button" onClick={this.increment} value="Plus" />
          </div>
        </section>
      </>
    );
  }
}

export default CounterTwo;
