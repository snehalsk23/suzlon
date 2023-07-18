import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch the user data from your API
    axios.get('http://localhost:3000/api/users/')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Access Level</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userData).map(([userId, user]) => (
            <tr key={userId}>
              <td>{userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user['phone number']}</td>
              <td>{user.accessLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
