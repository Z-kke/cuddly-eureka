import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import { List } from "@mui/material";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => dispatch(toggleTask(task.id))}
        />
      ))}
    </List>
  );
};

export default TaskList;
