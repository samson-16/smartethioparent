import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentResult = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/exam-results/');
        const data = response.data;
        const RecentHomework = data.slice(0, 5);
        setResult(RecentHomework);
      } catch (error) {
        console.error('Error fetching result:', error);
      }
    };

    fetchData();
  }, []);
  const currentDate = new Date();

return (

    <div className="block ">
      {results.map((result) => {
        
        
          <div key={result.id} className="w-auto h-auto mb-3 border  ">
            <div className='flex justify-between '>
              <h3 className="text-lg font-bold  ">{result.exam}</h3>
              <p className="text-gray-600 ">Course: {result.description}</p>
              <p className="text-gray-600">Due Date: {result.file}</p>
            </div>
          </div>
           
        
      })}
   </div>

);
}

export default RecentResult;