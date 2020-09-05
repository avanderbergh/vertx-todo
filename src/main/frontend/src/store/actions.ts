import { Task, ADD_TASK, TaskActionTypes } from "./types";

export function addTask(newTask: Task): TaskActionTypes {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}
