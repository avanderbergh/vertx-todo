import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Default message",
    };
  }

  componentDidMount() {
    fetch("/api/message")
      .then((response) => response.text())
      .then((text) => this.setState({ message: text }));
  }

  render() {
    let style = {
      color: "red",
    };
    return (
      <div style={style}>
        <span>{this.state.message}</span>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<Greeter />, document.getElementById("root"));
