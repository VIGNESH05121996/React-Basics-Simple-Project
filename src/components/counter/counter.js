import React, { Component } from "react";
import './counter.css'
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-button" onClick={this.increment}>
          +
        </button>
        <button className="counter-button" onClick={this.decrement}>
          -
        </button>
        <div className="output">{this.state.count}</div>
      </div>
    );
  }
}

export default Counter
