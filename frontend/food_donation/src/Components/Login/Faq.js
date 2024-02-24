import React, { useState } from 'react';
import "./Faq.css";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    { question: 'How can I submit feedback through the system?', answer: 'You can submit feedback through our platform designated section, ensuring your privacy is protected according to our Privacy Policy.' },
    { question: 'What happens after I submit feedback?', answer: 'After submitting feedback, our team reviews and analyzes it to enhance services, maintaining strict confidentiality and privacy standards throughout the process.' },
    { question: 'How does the feedback process contribute to improving police services?', answer: 'The feedback process plays a crucial role in enhancing police services by providing valuable insights into user experiences, allowing the police department to identify areas for improvement, address concerns, and tailor services to better meet the community needs.'},
    { question: 'Is my feedback confidential?', answer: 'Yes, your feedback is confidential. We prioritize the confidentiality of your information and do not disclose it to external parties, ensuring the security and integrity of your personal data.' },
  ];

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
          <div className="question" onClick={() => handleToggle(index)}>
            <h2>{item.question}</h2>
          </div>
          {openIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    <br></br>
    <Footer/>
            </>
  );
};

export default FAQ;