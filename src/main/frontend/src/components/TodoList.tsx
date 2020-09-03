import React, { useState } from "react";

class TodoItem {
  title = "";
  completed = false;

  constructor(title: string) {
    this.title = title;
  }
}

interface Props {
  title: string;
}

const TodoList: React.FC<Props> = ({ title }) => {
  const [todoTitle, setTodoTitle] = React.useState<string>("New Todo");
  const [todoList, setTodoList] = React.useState<TodoItem[]>([]);

  const handleSubmit = () => {
    setTodoList([...todoList, new TodoItem(todoTitle)]);
    setTodoTitle("");
  };

  const handleInputChanged = (event: { target: { value: string } }) =>
    setTodoTitle(event.target.value);

  return (
    <>
      <h1>{title}</h1>
      <input type="text" onChange={handleInputChanged} value={todoTitle} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todoList.map((todoItem) => (
          <li>{todoItem.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
