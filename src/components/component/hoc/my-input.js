import React from "react";
import HOCInput from "./hoc-input";

class MyInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.inputchange}
      />
    );
  }
}

export default HOCInput(MyInput);
