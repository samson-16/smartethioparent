import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TeacherDashboard = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    id: "",
    subject: "",
    type: "",
    dueDate: "",
    givenDate: "",
    description: "",
    status: "",
    priority: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleAddTask = () => {
    if (
      !newTask.subject ||
      !newTask.type ||
      !newTask.dueDate ||
      !newTask.givenDate ||
      !newTask.description ||
      !newTask.status ||
      !newTask.priority
    ) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    if (editingId) {
      setTasks(tasks.map((task) => (task.id === editingId ? newTask : task)));
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...newTask, id: uuidv4() }]);
    }
    setNewTask({
      id: "",
      subject: "",
      type: "",
      dueDate: "",
      givenDate: "",
      description: "",
      status: "",
      priority: "",
    });
  };

  const handleEditTask = (task) => {
    setEditingId(task.id);
    setNewTask(task);
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-white rounded shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">
        Teacher Dashboard
      </h1>
      <div className="border border-gray-300 rounded-md p-4">
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
          <label className="mr-2 w-24">Subject</label>
          <input
            name="subject"
            value={newTask.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2 w-24">Type</label>
          <select
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
          <label className="mr-2 w-24">Given Date</label>
          <input
            name="givenDate"
            value={newTask.givenDate}
            onChange={handleInputChange}
            placeholder="Given Date"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2 w-24">Due Date</label>
          <input
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
            placeholder="Due Date"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2 w-24">Status</label>
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select Status</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2 w-24">Priority</label>
          <select
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
          <label className="mr-2 w-24">Description</label>
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
      <div className="border border-gray-300 rounded-md p-4 mt-4">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        {tasks.map((task) => (
          <div key={task.id} className="mb-4 p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-bold">{task.subject}</h3>
            <p>Type: {task.type}</p>
            <p>Given Date: {task.givenDate}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Description: {task.description}</p>
            <button
              onClick={() => handleEditTask(task)}
              className="bg-green-500 hover:bg-green-700 text-white rounded-md px-4 py-2 mt-2"
            >
              Update Task
            </button>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-2 mt-2 ml-2"
            >
              Remove Task
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
      dueDate: PropTypes.string,
      givenDate: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TeacherDashboard;
