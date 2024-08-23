import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Task Manager!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
