import React from "react";

const Dialog = props => {
  return (
    <div>
      <header>
        <h1>{props.header}</h1>
      </header>
      <footer>{props.children}</footer>
    </div>
  );
};

class Combination extends React.Component {
  render() {
    return (
      <Dialog header="I'm Header">
        <h2>I'm content!</h2>
      </Dialog>
    );
  }
}

export default Combination;
