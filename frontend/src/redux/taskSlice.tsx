import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: "Learn React",
      description: "Study React basics",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      description: "Study state management with Redux",
      completed: false,
    },
    {
      id: 3,
      title: "Build an App",
      description: "Create a task manager app",
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
