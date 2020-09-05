import { TaskState, TaskActionTypes, ADD_TASK } from "./types";

const initialState: TaskState = {
  taskList: [],
};

export function TaskReducer(
  state = initialState,
  action: TaskActionTypes
): TaskState {
  switch (action.type) {
    case ADD_TASK:
      return { taskList: [...state.taskList, action.payload] };
      break;
    default:
      return state;
  }
}
