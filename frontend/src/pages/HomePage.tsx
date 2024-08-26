import React from "react";
import TaskList from "../components/TaskList";
import { Container, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>
      <TaskList />
    </Container>
  );
};

export default HomePage;
