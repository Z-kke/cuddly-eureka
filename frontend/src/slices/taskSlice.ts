import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: TasksState = {
  tasks: [],
  status: "idle",
  error: null,
};

// Fetch tasks from API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("/api/tasks");
  return response.data;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    taskUpdated(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      state.tasks[index] = action.payload;
    },
    taskDeleted(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch tasks";
      });
  },
});

export const { taskAdded, taskUpdated, taskDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;
