import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      areaValue: "请撰写一篇关于你喜欢的 DOM 元素的文章.",
      selectValue: ["coconut", "mango"],
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAreaChange(event) {
    this.setState({ areaValue: event.target.value });
  }

  handleSelectChange(event) {
    // select多选
    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ selectValue: value });
  }

  handleSubmit(event) {
    alert("提交的名字：" + this.state.value);
    alert("提交的文章：" + this.state.areaValue);
    alert("你喜欢的风味是：" + this.state.selectValue);
    event.preventDefault();
  }

  handleInputChange(event) {
    // 处理多个输入input
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* 受控组件 */}
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          名字:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          文章:
          <textarea
            value={this.state.areaValue}
            onChange={this.handleAreaChange}
          />
        </label>{" "}
        <label>
          选择你喜欢的风味:
          <select
            multiple={true}
            value={this.state.selectValue}
            onChange={this.handleSelectChange}
          >
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default Form;
