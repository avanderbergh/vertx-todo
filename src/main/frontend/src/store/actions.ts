import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  Task,
  ADD_TASK,
  LOAD_TASKS_SUCCESS,
  TaskActionTypes,
  TaskState,
} from "./types";

export const addTaskThunk = (
  newTask: Task
): ThunkAction<void, TaskState, unknown, Action<string>> => async (
  dispatch
) => {
  const response = await fetch("/api/task", {
    method: "POST",
    body: JSON.stringify(newTask),
  });
  console.log(response);
  dispatch(addTask(newTask));
};

export function addTask(newTask: Task): TaskActionTypes {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

export function loadTasksSuccess(tasks: Task[]): TaskActionTypes {
  return {
    type: LOAD_TASKS_SUCCESS,
    tasks,
  };
}

export const loadTasksThunk = (): ThunkAction<
  void,
  TaskState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const response = await fetch("api/task");
  console.log("response: ", response.status);
  const responseJson = await response.json();
  console.log("JSON", responseJson);
  let tasks = new Array<Task>();
  responseJson.forEach((taskJson: Task) => {
    tasks.push({ title: taskJson.title, completed: taskJson.completed });
  });
  dispatch(loadTasksSuccess(tasks));
};
