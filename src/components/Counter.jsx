import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timer: 0,
    };
    console.log('run constructor');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  componentDidMount = () => {
    console.log('run componentDidMount');
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  componentDidUpdate = () => {
    console.log('run componentDidUpdate');
  };

  componentWillUnmount = () => {
    console.log('run componentWillUnmount');
    clearInterval(this.intervalId);
  };

  render() {
    console.log('run render');
    return (
      <div>
        <h1>Counter</h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.count}</span>
        <button className="increment-btn" onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}

export default Counter;
