import express from "express";
import { Request, Response } from "express";
import { Task } from "../models/task";

const router = express.Router();

// Mock data for now
let tasks: Task[] = [
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
];

// GET /tasks - Get all tasks
router.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

// POST /tasks - Add a new task
router.post("/tasks", (req: Request, res: Response) => {
  const newTask: Task = {
    id: tasks.length + 1,
    ...req.body,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Update an existing task
router.put("/tasks/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete("/tasks/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
});

export default router;
