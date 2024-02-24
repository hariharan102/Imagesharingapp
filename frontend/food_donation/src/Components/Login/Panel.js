import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Login/Panel.css"
function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/auth/users') 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/auth/users/${userId}`) 
      .then(() => {
        
        setUsers(users.filter(user => user.userRegId !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const totalUsers = users.length; 

  return (
    <div className="admin-panel-container">
      <h1>ADMIN</h1>
      <p>Total Users: {totalUsers}</p>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>User ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userRegId}>
              <td>{user.username}</td>
              <td>{user.emailid}</td>
              <td>{user.mobileno}</td>
              <td>{user.userRegId}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteUser(user.userRegId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default AdminPanel;
