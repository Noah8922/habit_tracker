import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef(); /** 돔요소에 접근하지 않고, ref를 생성하고 */

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = ""; /** 요렇게 많이 씀 */
    this.formRef.current.reset(); /** 근데 요게 정석 */
  };
  render() {
    return (
      <form ref={this.formRef} className="add-input" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef} /** 원하는 컴포넌트에 ref로 등록하면 된다. */
          type="text"
          className="add-input"
          placeholder="Habits"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
