import axios from "axios";
import { Task } from "../types/task";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (
  id: number,
  task: Partial<Task>,
): Promise<Task> => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
