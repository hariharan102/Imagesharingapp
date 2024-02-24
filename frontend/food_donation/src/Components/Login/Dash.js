import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import FeedbackReports from '../Login/FeedbackReports';
import "./Dash.css"
import He from './navbar';
import Footer from './Footer';

const Da = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is not logged in, then redirect to the login page
    if (!loggedIn) {
      navigate('/login');
      return;
    }

    // Fetch user data
    axios.get('http://localhost:8080/auth/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    // Fetch feedback reports
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback reports:', error);
      });
  }, [loggedIn, navigate]);

  return (
    <>
    <He/>
    <div>
      {/* Render AdminPanel */}
      <div className="dashboard-container">
      {/* Render FeedbackReports */}
      <FeedbackReports reports={reports} />

      {/* Button to navigate to analysis page */}
      <Link to="/analysis">Go to Analysis Page</Link>

      {/* Button to navigate to mail page */}
      <Link to="/mail">Go to Mail Page</Link>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Da;
