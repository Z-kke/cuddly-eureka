import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./components/TaskList";

const App: React.FC = () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
);

export default App;
