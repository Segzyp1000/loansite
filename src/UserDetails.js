// UserDetails.js
import React from 'react';

const UserDetails = ({ userId }) => {
  // Fetch user details based on userId and display them
  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {userId}</p>
      {/* Display other user details */}
    </div>
  );
};

export default UserDetails;
