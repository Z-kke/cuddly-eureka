import { Router } from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const router = Router();

// Route to get all tasks
router.get("/", getAllTasks);

// Route to create a new task
router.post("/", createTask);

// Route to get a single task by ID
router.get("/:id", getTask);

// Route to update a task by ID
router.put("/:id", updateTask);

// Route to delete a task by ID
router.delete("/:id", deleteTask);

export default router;
