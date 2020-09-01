import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    listName: "ToDo",
  };

  render() {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    );
  }
}
