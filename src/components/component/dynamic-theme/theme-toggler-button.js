import React from "react";
import { ThemeContext, UserContext } from "./theme-context";

const ThemeToggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <UserContext.Consumer>
          {({ name }) => (
            <button
              onClick={toggleTheme}
              style={{ backgroundColor: theme.background }}
            >
              {name}
            </button>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggleButton;
