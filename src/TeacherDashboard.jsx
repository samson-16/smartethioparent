import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const TeacherDashboard = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    id: "",
    subject: "",
    type: "",
    dueDate: "",
    givenDate: "",
    description: "",
    priority: "",
    status: "Incomplete",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const resetForm = () => {
    setNewTask({
      id: "",
      subject: "",
      type: "",
      dueDate: "",
      givenDate: "",
      description: "",
      priority: "",
      status: "Incomplete",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let finalValue = value;
    if (name === "givenDate" || name === "dueDate") {
      finalValue = value;
    }

    if (name === "subject") {
      if (finalValue.length > 50) {
        setError("Subject name cannot be more than 50 characters.");
        return;
      }

      if (finalValue.length > 0 && !finalValue.match(/^[A-Z][a-zA-Z\s]*$/)) {
        setError(
          "Subject name must start with an uppercase letter and can only contain alphabet letters and spaces.",
        );
        return;
      }
    }

    setNewTask({ ...newTask, [name]: finalValue });
  };

  const handleAddTask = () => {
    if (
      !newTask.subject ||
      !newTask.type ||
      !newTask.dueDate ||
      !newTask.givenDate ||
      !newTask.description ||
      !newTask.priority
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (moment(newTask.dueDate).isBefore(newTask.givenDate)) {
      setError("Due By date cannot be earlier than Assigned On date.");
      return;
    }

    if (
      moment(newTask.givenDate).isAfter(moment().add(9, "months")) ||
      moment(newTask.dueDate).isAfter(moment().add(9, "months"))
    ) {
      setError(
        "Assigned On and Due By dates cannot be more than 9 months in the future.",
      );
      return;
    }

    if (
      moment(newTask.givenDate).isBefore(moment().subtract(9, "months")) ||
      moment(newTask.dueDate).isBefore(moment().subtract(9, "months"))
    ) {
      setError(
        "Assigned On and Due By dates cannot be more than 9 months in the past.",
      );
      return;
    }

    if (moment(newTask.dueDate).diff(newTask.givenDate, "days") < 1) {
      setError(
        "There must be at least a 1-day difference between the Assigned On and Due By dates.",
      );
      return;
    }

    setError("");
    if (editingId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId ? { ...newTask, status: "Incomplete" } : task,
        ),
      );
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...newTask, id: uuidv4(), status: "Incomplete" }]);
    }
    resetForm();
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
          <label htmlFor="subject" className="mr-2 w-28">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={newTask.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-2 w-full"
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
            <option value="Homework">Homework</option>
            <option value="Assignment">Assignment</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="assignedOn" className="mr-2 w-28">
            Assigned On
          </label>
          <Datetime
            inputProps={{ id: "assignedOn", placeholder: "Assigned On" }}
            value={newTask.givenDate}
            onChange={(date) =>
              handleInputChange({ target: { name: "givenDate", value: date } })
            }
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="dueBy" className="mr-2 w-28">
            Due By
          </label>
          <Datetime
            inputProps={{ id: "dueBy", placeholder: "Due By" }}
            value={newTask.dueDate}
            onChange={(date) =>
              handleInputChange({ target: { name: "dueDate", value: date } })
            }
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="priority" className="mr-2 w-28">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
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
          />
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
        {tasks.map((task) => (
          <div
            key={task.id}
            className="mb-4 p-4 bg-gray-100 rounded-md shadow-lg transition-colors duration-500 ease-in-out hover:bg-gray-200 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600">
              {task.subject}
            </h3>
            <p className="mb-2 flex">
              <span className="font-semibold w-32 text-gray-700">Type:</span>{" "}
              <span>{task.type}</span>
            </p>
            <p className="mb-2 flex">
              <span className="font-semibold w-32">Assigned On:</span>{" "}
              {task.givenDate.format("MM/DD/YYYY hh:mm A")}
            </p>
            <p className="mb-2 flex">
              <span className="font-semibold w-32">Due By:</span>{" "}
              {task.dueDate.format("MM/DD/YYYY hh:mm A")}
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
              <span className="font-semibold w-32">Priority:</span>{" "}
              {task.priority}
            </p>
            <p className="mb-2 flex">
              <span className="font-semibold w-32">Description:</span>{" "}
              {task.description}
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
        ))}
      </div>
    </div>
  );
};

TeacherDashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      subject: PropTypes.string,
      type: PropTypes.string,
      dueDate: PropTypes.instanceOf(moment),
      givenDate: PropTypes.instanceOf(moment),
      description: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TeacherDashboard;
