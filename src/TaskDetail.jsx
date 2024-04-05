import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const TaskDetail = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => Number(task.id) === Number(taskId));

  if (!task) {
    return null;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">{task.subject}</h1>
      <div className="border border-gray-300 rounded-md p-4">
        <p className="mb-4">
          <span className="font-semibold">Type:</span>
          <span className="ml-2 text-gray-700">{task.type}</span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Due Date:</span>
          <span className="ml-2 text-gray-700">{task.dueDate}</span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Description:</span>
          <span className="ml-2 text-gray-700">{task.description}</span>
        </p>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TaskDetail;
