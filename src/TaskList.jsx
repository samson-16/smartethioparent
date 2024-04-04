import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks }) => {
  const navigate = useNavigate();

  return (
    <table className="table-fixed w-full">
      <thead className="border-t-2 border-b-4 border-gray-300">
        <tr>
          <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Subject</th>
          <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Type</th>
          <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Due Date</th>
          <th className="w-1/2 px-4 py-2 text-[#0F6CBF] text-left">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={task.id}
            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 border-gray-300 border-t-2 cursor-pointer`}
            onClick={() => navigate(`/tasks/${task.id}`)}
          >
            <td className="px-4 py-2">{task.subject}</td>
            <td className="px-4 py-2">{task.type}</td>
            <td className="px-4 py-2">{task.dueDate}</td>
            <td className="px-4 py-2">{task.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TaskList.propTypes = {
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

export default TaskList;
