import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Parent() {
  // Access user information from AuthContext
  const { user } = useContext(AuthContext);

  // Extract parent information
  console.log(user)
  const parentInfo = user ? user.user : null;
  console.log(parentInfo)
  return (
    <div>
      <h1>Parent Information</h1>
      {parentInfo ? (
        <div>
          <p>Name: {parentInfo.first_name} {parentInfo.last_name}</p>
          <p>Email: {parentInfo.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No parent information available</p>
      )}
    </div>
  );
}

export default Parent;
