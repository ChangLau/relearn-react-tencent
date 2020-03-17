import React from "react";

class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      messages: ["React", "Re: React", "Re:Re: React"],
      showWarning: true
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
        <Mailbox unreadMessages={this.state.messages}></Mailbox>
        <ul>
          {this.state.messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        <div>
          The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        </div>
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function WarningBanner(props) {
  return (
    <div>{props.warn ? <div className="warning">Warning!</div> : null}</div>
  );
}

export default Condition;
