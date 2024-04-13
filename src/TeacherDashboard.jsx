import PropTypes from "prop-types";
import { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import axios from "axios";

const TeacherDashboard = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    type: "",
    deadline: "",
    description: "",
    status: "Incomplete",
    details: 0,
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const resetForm = () => {
    setNewTask({
      title: "",
      type: "",
      deadline: "",
      description: "",
      status: "Incomplete",
      details: 0,
    });
  };

  const getCsrfToken = () => {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = async () => {
    const csrfToken = getCsrfToken();

    if (
      !newTask.title ||
      !newTask.type ||
      !newTask.deadline ||
      !newTask.description
    ) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    const taskToAdd = {
      ...newTask,
      status: "Incomplete",
      deadline: new Date(newTask.deadline).toISOString(),
      details: parseInt(newTask.details),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/tasks/",
        taskToAdd,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        },
      );

      setTasks([...tasks, response.data]);

      resetForm();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingId(task.id);
    setNewTask({ ...task, status: "Incomplete" });
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Incomplete" ? "Complete" : "Incomplete",
            }
          : task,
      ),
    );
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-white rounded shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05] leading-tight">
        Teacher Dashboard
      </h1>
      <div className="border border-gray-300 rounded-md p-4 transition-colors duration-500 ease-in-out hover:bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        <div className="flex items-center mb-2">
          <label htmlFor="title" className="mr-2 w-28">
            Title
          </label>
          <input
            id="title"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border border-gray-300 rounded-md p-2 w-full"
            maxLength={255}
            minLength={1}
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="type" className="mr-2 w-28">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={newTask.type}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select Type</option>
            <option value="homework">Homework</option>
            <option value="assignment">Assignment</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="dueBy" className="mr-2 w-28">
            Deadline
          </label>
          <Datetime
            inputProps={{ id: "dueBy", placeholder: "Deadline" }}
            value={newTask.deadline}
            onChange={(date) =>
              handleInputChange({ target: { name: "deadline", value: date } })
            }
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="description" className="mr-2 w-28">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border border-gray-300 rounded-md p-2 w-full"
            minLength={1}
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="details" className="mr-2 w-28">
            Details
          </label>
          <select
            id="details"
            name="details"
            value={newTask.details}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </select>
        </div>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        >
          {editingId ? "Save Changes" : "Add Task"}
        </button>
      </div>
      <div className="border border-gray-300 rounded-md p-4 mt-4 transition-colors duration-500 ease-in-out hover:bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        {tasks.map((task) => {
          const deadline = moment(task.deadline);
          const assignedOn = moment(task.assignedOn);

          return (
            <div
              key={task.id}
              className="mb-4 p-4 bg-gray-100 rounded-md shadow-lg transition-colors duration-500 ease-in-out hover:bg-gray-200 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold mb-4 text-blue-600">
                {task.title}
              </h3>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Type:</span> {task.type}
              </p>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Date:</span>{" "}
                {assignedOn.format("MM/DD/YYYY hh:mm A")}
              </p>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Deadline:</span>{" "}
                {deadline.format("MM/DD/YYYY hh:mm A")}
              </p>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Status:</span>
                <button
                  onClick={() => handleToggleComplete(task.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-28"
                >
                  {task.status === "Incomplete" ? "Incomplete" : "Complete"}
                </button>
              </p>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Description:</span>{" "}
                {task.description}
              </p>
              <p className="mb-2 flex">
                <span className="font-semibold w-32">Details:</span>{" "}
                {task.details === 0
                  ? "Low"
                  : task.details === 1
                    ? "Medium"
                    : "High"}
              </p>
              <button
                onClick={() => handleEditTask(task)}
                className="bg-green-500 hover:bg-green-700 text-white rounded-md px-4 py-2 mt-3 transition-colors duration-500 ease-in-out w-24"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-2 mt-3 ml-3 transition-colors duration-500 ease-in-out w-24"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TeacherDashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["homework", "assignment"]).isRequired,
      deadline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      details: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TeacherDashboard;
