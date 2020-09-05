import { connect, ConnectedProps } from "react-redux";
import { addTask } from "../store/actions";
import TodoList from "../components/TodoList";
import { TaskState } from "../store/types";

const mapState = (state: TaskState) => ({
  tasks: state.taskList,
});

const mapDispatch = {
  addTask,
};

export default connect(mapState, mapDispatch)(TodoList);
