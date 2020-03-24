import React from "react";

const HOCInput = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: "CHANGLAU"
      };
    }

    inputchange = param => {
      this.setState({
        inputValue: String(param.target.value).toUpperCase()
      });
    };

    componentDidMount() {
      console.log(this.props);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          value={this.state.inputValue}
          inputchange={this.inputchange}
        ></WrappedComponent>
      );
    }
  };
};

export default HOCInput;
