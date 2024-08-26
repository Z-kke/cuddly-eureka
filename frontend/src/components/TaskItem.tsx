import React from "react";
import { Task } from "../types/task";
import { Checkbox, ListItemButton, ListItemText } from "@mui/material";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <ListItemButton onClick={onToggle}>
      <Checkbox checked={task.completed} />
      <ListItemText primary={task.title} secondary={task.description} />
    </ListItemButton>
  );
};

export default TaskItem;
