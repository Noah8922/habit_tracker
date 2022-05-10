import React, { Component } from "react";

class ResetButton extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  onReset = (event) => {
    this.props.onReset(this.state.habits);
  };
  render() {
    return (
      <form onSubmit={this.onReset}>
        <button className="habits-reset"> Reset</button>
      </form>
    );
  }
}

export default ResetButton;
