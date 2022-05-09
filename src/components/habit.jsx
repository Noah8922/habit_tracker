import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncreament = () => {
    /** State 오브젝트 안에 있는 count를 증가한뒤 state를 업데이트 해야 함 */
    this.setState({ count: this.state.count + 1 });
    /** this.state.count++은 왜 안되는가?
     * 오브젝트 안에 있는 데이터를 하나만 찝어서 업데이트하게 되면,
     * 리액트는 업데이트가 됐는지 안됐는지 알 수 없다.
     * 그래서 리액트에서는 state를 업데이트 할 때, setState라는 함수를 호출하여
     * 모든 state에 대한 재렌더링을 실시해야 한다.
     */
  };

  handleDecreament = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
    /** 삼항연사자 생각좀 해라!!!! */
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
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
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
