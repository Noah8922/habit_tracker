import React, { Component } from "react";

class Habit extends Component {
  handleIncreament = () => {
    this.props.onIncrement(this.props.habit.name);
  };

  handleDecreament = () => {
    this.props.onDecrement(this.props.habit.name);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit.name);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
