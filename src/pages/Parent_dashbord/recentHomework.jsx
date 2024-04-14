import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentHomework = () => {
  const [homeworkTasks, setHomeworkTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
        const homeworkTasksData = response.data.filter((tasks) => tasks.type === 'Homework');
        const sortedHomework = homeworkTasksData.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        const RecentHomework = sortedHomework.slice(0, 5);
        setHomeworkTasks(RecentHomework);
      } catch (error) {
        console.error('Error fetching homework tasks:', error);
      }
    };

    fetchData();
  }, []);
  const currentDate = new Date();

return (
    <div>
    <div className="block ">
      {homeworkTasks.map((homework) => {
        const dueDate = new Date(homework.deadline);
        if (dueDate < currentDate) {
          return null;
        }
        return (
          <div key={homework.id} className="w-auto h-auto mb-3 border  ">
            <div className='flex justify-between '>
              <h3 className="text-lg font-bold  ">{homework.title}</h3>
              <p className="text-gray-600 ">Course: {homework.description}</p>
              <p className="text-gray-600">Due Date: {homework.deadline}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default RecentHomework;