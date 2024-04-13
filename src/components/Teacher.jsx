import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Teacher() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const teacherInfo = user ? user.user : null;
  console.log(teacherInfo)
  return (
    <div>
      <h1>teacher Information</h1>
      {teacherInfo ? (
        <div>
          <p>Name: {teacherInfo.first_name} {teacherInfo.last_name}</p>
          <p>Email: {teacherInfo.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No teacher information available</p>
      )}
    </div>
  );
}

export default Teacher;
