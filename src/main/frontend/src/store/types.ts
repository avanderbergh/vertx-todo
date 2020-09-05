export interface Task {
  title: string;
  completed: boolean;
}

export interface TaskState {
  taskList: Task[];
}

export const ADD_TASK = "ADD_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export type TaskActionTypes = AddTaskAction;
