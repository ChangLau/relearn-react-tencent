import React from "react";

class Event extends React.Component {
  // 事件处理，三种绑定this的方式
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  // 构造器绑定
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // class fileds语法
  myClick = () => {
    console.log("this is:", this);
  };

  myClick2(e) {
    console.log("e is:", e);
    console.log("this is:", this);
  }

  deleteRow(id, e) {
    console.log(id, e, this);
  }

  deleteRow2(id, e) {
    console.log(id, e, this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={this.myClick}>Click Me!</button>
        <button
          onClick={e => {
            this.myClick2(e);
          }}
        >
          Click Me 2!
        </button>
        <button onClick={e => this.deleteRow(1, e)}>Delete Row</button>
        <button onClick={this.deleteRow2.bind(this, 2)}>Delete Row2</button>
      </div>
    );
  }
}

export default Event;
