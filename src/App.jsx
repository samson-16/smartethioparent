import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Task from "./Task";
import TeacherDashboard from "./TeacherDashboard";
import Footer from "./Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const filter = "All";

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route
            path="/tasks/*"
            element={<Task tasks={tasks} setTasks={setTasks} filter={filter} />}
          />
          <Route
            path="/teacher/*"
            element={<TeacherDashboard tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
