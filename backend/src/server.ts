import app from "./app";
import taskRoutes from "./routes/task.routes";

const PORT = process.env.PORT || 5000;

// Register task routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
