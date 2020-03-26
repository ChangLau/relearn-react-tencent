import React from "react";

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(",")}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["marklar"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    // const words = this.state.words;
    // words.push("marklar");
    // this.setState({ words: words });
    this.setState(state => ({
      words: [...state.words, "marklar"]
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;
