import React from "react";
import { themes, UserContext, ThemeContext } from "./theme-context";
import ThemedButton from "./themed-button";
import ThemeTogglerButton from "./theme-toggler-button";

const Toolbar = props => {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      user: {
        name: "Fluently"
      }
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
        <ThemeContext.Provider value={this.state}>
          <UserContext.Provider value={this.state.user}>
            <Content></Content>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;
