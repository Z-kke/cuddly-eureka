import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const tasks = await getTasks();
  return tasks;
});

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (task: Omit<Task, "id">) => {
    const newTask = await addTask(task);
    return newTask;
  },
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      });
  },
});

export default taskSlice.reducer;
