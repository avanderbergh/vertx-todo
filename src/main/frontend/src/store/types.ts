export interface Task {
  title: string;
  completed: boolean;
}

export interface TaskState {
  taskList: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const LOAD_TASKS_SUCCESS = "LOAD_TASKS";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface LoadTasksAction {
  type: typeof LOAD_TASKS_SUCCESS;
  tasks: Task[];
}

export type TaskActionTypes = AddTaskAction | LoadTasksAction;
