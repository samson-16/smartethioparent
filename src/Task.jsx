import { useState } from "react";

const Task = () => {
  const [filter, setFilter] = useState("All");

  const tasks = [
    {
      id: 1,
      subject: "Maths",
      type: "Homework",
      dueDate: "2024-04-10",
      description: "Complete exercises 1-10 in Chapter 5",
    },
    {
      id: 2,
      subject: "History",
      type: "Assignment",
      dueDate: "2024-04-15",
      description: "Write a 2-page paper on the causes of World War II",
    },
  ];

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.type === filter);

  return (
    <div className="container h-96 mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">Tasks</h1>
      <div className="flex space-x-4 mb-8">
        <h2
          className={`cursor-pointer ${filter === "All" ? "underline" : ""} text-[#333366]`}
          onClick={() => setFilter("All")}
        >
          All
        </h2>
        <h2
          className={`cursor-pointer ${filter === "Homework" ? "underline" : ""} text-[#333366]`}
          onClick={() => setFilter("Homework")}
        >
          Homeworks
        </h2>
        <h2
          className={`cursor-pointer ${filter === "Assignment" ? "underline" : ""} text-[#333366]`}
          onClick={() => setFilter("Assignment")}
        >
          Assignments
        </h2>
      </div>
      <table className="table-fixed w-full">
        <thead className="border-t-2 border-b-4 border-gray-300">
          <tr>
            <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">
              Subject
            </th>
            <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Type</th>
            <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">
              Due Date
            </th>
            <th className="w-1/2 px-4 py-2 text-[#0F6CBF] text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr
              key={task.id}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 border-gray-300 border-t-2`}
            >
              <td className="px-4 py-2">{task.subject}</td>
              <td className="px-4 py-2">{task.type}</td>
              <td className="px-4 py-2">{task.dueDate}</td>
              <td className="px-4 py-2">{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
