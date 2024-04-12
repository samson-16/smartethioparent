import React, { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/parent/");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/parent/")
//       .then((res) => {
//         console.log(res.data);
//         const transformedData = finalSprid(res.data);
//         setRows(transformedData);
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });})
  return (
    <div>
        
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.first_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}