import React from "react";

const ThemeContext = React.createContext("light");

class Context extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
    );
  }
}

const Toolbar = () => {
  return (
    <div>
      <ThemedButtom></ThemedButtom>
    </div>
  );
};

class ThemedButtom extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context}></Button>;
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.theme}</button>;
  }
}

export default Context;
