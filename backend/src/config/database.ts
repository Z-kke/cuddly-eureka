import { Sequelize } from "sequelize-typescript";
import { Task } from "../models/task.model";

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize({
  database: "taskify",
  dialect: "postgres",
  username: "user",
  password: "password",
  storage: ":memory:",
  models: [Task],
});

export { sequelize };
