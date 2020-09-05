import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { TaskReducer } from "./store/reducers";

import TodoListContainer from "./containers/TodoListContainer";

const store = createStore(TaskReducer);

const App: React.FC = () => <TodoListContainer title="My Tasks" />;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
