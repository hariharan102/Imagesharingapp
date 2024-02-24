import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminPanel from './/Panel';
import FeedbackReports from '../Login/FeedbackReports';

const Da = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   
    axios.get('http://localhost:8080/auth/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback reports:', error);
      });
  }, []);

  const handleLoginAndNavigate = () => {
    
    localStorage.setItem('token', 'localStorage.token');

    
    navigate('/');
  };

  return (
    <div>
      {!loggedIn && (
        <button onClick={handleLoginAndNavigate}>Login</button>
      )}

      {loggedIn && (
        <div>
          <AdminPanel users={users} setUsers={setUsers} />
          <FeedbackReports reports={reports} />

          
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Da;
