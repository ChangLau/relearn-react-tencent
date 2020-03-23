import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  btnClick = () => {
    console.log(this.ref);
  };

  render() {
    return (
      <div onClick={this.btnClick}>
        <FancyButton ref={this.ref}>Click Me!</FancyButton>
      </div>
    );
  }
}

export default Refs;
