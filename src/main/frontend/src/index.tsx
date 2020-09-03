import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [message, setMessage] = useState("Default Title");
  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.text())
      .then((text) => setMessage(text));
  });
  return <TodoList title={message} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
