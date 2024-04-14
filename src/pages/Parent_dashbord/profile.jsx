// import React, { useEffect, useState } from "react";

// export default function Profile() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/parent");
//       if (!response.ok) {
//         throw new Error("Request failed");
//       }
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
// //   useEffect(() => {
// //     axios
// //       .get("http://127.0.0.1:8000/api/parent/")
// //       .then((res) => {
// //         console.log(res.data);
// //         const transformedData = finalSprid(res.data);
// //         setRows(transformedData);
// //       })
// //       .catch((err) => {
// //         console.log("err", err);
// //       });})
//   return (
//     <div>
        
//       {data && (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.first_name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/parent/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div key={data.id} className="w-auto h-auto mb-3 border  ">
            <div className='flex justify-between '>
              <h3 className="text-lg font-bold  ">{data.first_name}</h3>
              <p className="text-gray-600 "> {data.last_name}</p>
              <p className="text-gray-600">{data.children}</p>
            </div>
          </div>
  );
};

export default Profile;