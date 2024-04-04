import PropTypes from "prop-types";

const TaskDetail = ({ task }) => {
  if (!task) {
    return <div>No task found</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">{task.subject}</h1>
      <div className="border border-gray-300 rounded-md p-4">
        <p className="mb-4">
          <span className="font-semibold">Type:</span> {task.type}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Due Date:</span> {task.dueDate}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Description:</span> {task.description}
        </p>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default TaskDetail;
