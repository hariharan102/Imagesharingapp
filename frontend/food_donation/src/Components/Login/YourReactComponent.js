import React, { useEffect, useState } from 'react';
import './Register/YourReactComponent.css';
import He from './navbar';
import Footer from './Footer';
const YourReactComponent = () => {
  const [userEmails, setUserEmails] = useState([]);
  const fetchUserEmails = async () => {
    try {
      // Fetch user emails from your server
      // Replace the URL with your actual API endpoint
      const response = await fetch('http://localhost:8080/auth/user-emails');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user emails:', error);
      return [];
    }
  };
  const generateMailtoLink = (emails) => {
    const subject = 'feedback';
    const body = 'happy/not happy';
    return `mailto:${emails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  useEffect(() => {
    const fetchDataAndGenerateMailtoLink = async () => {
      try {
        const emails = await fetchUserEmails();
        setUserEmails(emails);
      } catch (error) {
        console.error('Error fetching user emails:', error);
      }
    };
    fetchDataAndGenerateMailtoLink();
  }, []); // The empty dependency array ensures the effect runs only once on component mount
  const handleSendEmails = () => {
    const mailtoLink = generateMailtoLink(userEmails);
    window.location.href = mailtoLink;
  };
  return (
    <>
       <He />
      <div className="container">
        <h1 className="title">Your React Component</h1>
        {/* Add your component content here */}
        <div className="emails-box">
          <p className="emails">Emails:</p>
          {userEmails.map((email, index) => (
            <div key={index} className="email-item">
              {email}
            </div>
          ))}
        </div>
        <button className="send-button" onClick={handleSendEmails}>
          Send Emails
        </button>
        {/* Add more components or elements as needed */}
      </div>
      <Footer />
    </>
  );
};

export default YourReactComponent;
