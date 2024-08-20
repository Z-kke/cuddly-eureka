import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slices/tasksSlice";

// Create Redux store
const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Register tasks slice reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
