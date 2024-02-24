import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Feedback1 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [rating, setRating] = useState(0); 

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    
    console.log('Email:', email);
    console.log('Rating:', rating);
    try {
      axios.post('http://localhost:8082/feed/addFeedback', {
         email,
         rating,
      });

      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <div className='feed'>
        <div className="feedback-container">
          <h2>Rate Your Experience</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => handleRatingClick(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <p>Your Rating: {rating} Stars</p>

          <div className="email-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Feedback1;