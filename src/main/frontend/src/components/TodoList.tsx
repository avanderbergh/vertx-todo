import React, { useState } from "react";
import { addTask } from "../store/actions";
import { Task } from "../store/types";

class TodoItem implements Task {
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}

interface Props {
  title: string;
  tasks: Task[];
  addTask(newTask: Task): void;
}

const TodoList: React.FC<Props> = (props) => {
  const [todoTitle, setTodoTitle] = React.useState<string>("New Todo");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addTask({ title: todoTitle, completed: false });
    setTodoTitle("");
  };

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.title}</h1>
      <input type="text" onChange={handleInputChanged} value={todoTitle} />
      <button type="submit">Add</button>
      <ul>
        {props.tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </form>
  );
};

export default TodoList;
