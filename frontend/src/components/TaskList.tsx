import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchTasks } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import { List, CircularProgress } from "@mui/material";

const TaskList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleToggle = (id: number) => {
    // Add logic here
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </List>
  );
};

export default TaskList;
