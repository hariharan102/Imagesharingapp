import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import "../Login/Feedback.css";

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const email = 'adaikkappanhariharan@gmail.com';
  const subject = 'Feedback about your website ';

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  }

  const handleSubmit = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(feedback)}`;
  }

  return (
    <>
      <Navbar />
      <div className="formm">
        <div className="title">FEEDBACK</div>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
     
          placeholder="Enter your feedback here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;
