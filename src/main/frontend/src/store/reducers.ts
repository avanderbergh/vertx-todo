import {
  TaskState,
  TaskActionTypes,
  ADD_TASK,
  LOAD_TASKS_SUCCESS,
} from "./types";

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
    case LOAD_TASKS_SUCCESS:
      return { taskList: action.tasks };
      break;
    default:
      return state;
  }
}
