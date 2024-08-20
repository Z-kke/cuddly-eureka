import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../slices/tasksSlice";
import { RootState, AppDispatch } from "../store/store";

const TaskList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state: RootState) => state.tasks.status);
  const error = useSelector((state: RootState) => state.tasks.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Task List</h2>
      {status === "loading" && <p>Loading tasks...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
