import express, { Application } from "express";
import { sequelize } from "./config/database";

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

export default app;
