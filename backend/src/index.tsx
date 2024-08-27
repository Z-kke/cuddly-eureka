import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
