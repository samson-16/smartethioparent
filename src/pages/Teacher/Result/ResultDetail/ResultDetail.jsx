import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const ResultDetail = () => {
  const { Id } = useParams()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${Id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUser(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching user:", error);
          });
      }, [Id]);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="result-detail">
          <div className='mt-6'>
            <ul>
              <li className="shadow-md shadow-blue-400 m-1 font-bold ">
               
                <p>Subject: </p>
                <p>Class: </p>
                <p>Type: </p>
                {user.name}
                <PictureAsPdfIcon style={{ color: "blue", fontSize: "2rem", display:"block" }} />
              </li>
            </ul>
          </div>
        </div>
      )}
     
    </>
  )
}

export default ResultDetail