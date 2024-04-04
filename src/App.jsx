import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Task from "./Task";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks/*" element={<Task />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
