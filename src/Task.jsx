import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import TaskDetail from "./TaskDetail";
import TaskList from "./TaskList";

const Task = () => {
  const [filter, setFilter] = useState("All");
  const { taskId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const tasks = [
    {
      id: 1,
      subject: "Maths",
      type: "Homework",
      dueDate: "2024-04-10",
      givenDate: "2024-04-01",
      description: "Complete exercises 1-10 in Chapter 5",
      teacher: "Mr. Abebe Tsegaye",
      status: "Incomplete",
      priority: "High",
    },
    {
      id: 2,
      subject: "History",
      type: "Assignment",
      dueDate: "2024-04-15",
      givenDate: "2024-04-05",
      description: "Write a 2-page paper on the causes of World War II",
      teacher: "Mrs. Hirut Daniel",
      status: "Incomplete",
      priority: "Medium",
    },
    {
      id: 3,
      subject: "Geography",
      type: "Homework",
      dueDate: "2024-04-17",
      givenDate: "2024-04-07",
      description: "Draw the map of Ethiopia",
      teacher: "Mr. Abdulaziz Nesredin",
      status: "Incomplete",
      priority: "Low",
    },
  ];

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.type === filter);

  const task = tasks.find((task) => Number(task.id) === Number(taskId));

  useEffect(() => {
    if (!task && taskId) {
      navigate("/tasks");
    }
  }, [task, navigate, taskId]);

  return (
    <div className="container h-screen mx-auto my-10">
      {location.pathname === "/tasks" && (
        <>
          <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">Tasks</h1>
          <div className="flex space-x-4 mb-8">
            <h2
              className={`cursor-pointer ${filter === "All" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
              onClick={() => setFilter("All")}
            >
              All
            </h2>
            <h2
              className={`cursor-pointer ${filter === "Homework" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
              onClick={() => setFilter("Homework")}
            >
              Homeworks
            </h2>
            <h2
              className={`cursor-pointer ${filter === "Assignment" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
              onClick={() => setFilter("Assignment")}
            >
              Assignments
            </h2>
          </div>
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={filteredTasks} filter={filter} />}
        />
        <Route path=":taskId" element={<TaskDetail tasks={tasks} />} />
      </Routes>
    </div>
  );
};

export default Task;
