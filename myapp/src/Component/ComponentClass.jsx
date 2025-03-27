import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0, // Time in seconds
      isRunning: false, // Stopwatch status
    };
    this.timer = null; // Reference for interval
  }

  // Start the stopwatch
  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  };

  // Pause the stopwatch
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  // Reset the stopwatch
  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, isRunning: false });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>⏱️ Stopwatch</h1>
        <h2>{this.state.time} seconds</h2>
        <button onClick={this.startTimer} disabled={this.state.isRunning}>
          Start
        </button>
        <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
          Stop
        </button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
