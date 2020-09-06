import { connect, ConnectedProps } from "react-redux";
import { addTaskThunk, loadTasksThunk } from "../store/actions";
import TodoList from "../components/TodoList";
import { TaskState } from "../store/types";

const mapState = (state: TaskState) => ({
  tasks: state.taskList,
});

const mapDispatch = {
  addTask: addTaskThunk,
  loadTasks: loadTasksThunk,
};

export default connect(mapState, mapDispatch)(TodoList);
