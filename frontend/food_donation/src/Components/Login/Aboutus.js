import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ".//Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <div className="privacy-policy-container">
        <h1>ABOUT US</h1>

        <p>
          Welcome to the Rajasthan Police Feedback System. We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data.
          The Rajasthan Police Feedback System may collect personal information
          when you interact with our platform, such as when you provide feedback
          or use our services.
          We use the collected information for various purposes.
        </p>

        <p>
        Facilitating the feedback process is a key priority for us, aiming to enhance our services based on valuable user input. Our commitment extends to ensuring the utmost security of the platform, creating a safe space for feedback. We actively engage with users, fostering open communication channels to better understand and address their needs. Your feedback plays a crucial role in shaping our ongoing efforts to provide optimal services.
        </p>
        <p>
          We prioritize the confidentiality of your information. We do not sell,
          trade, or disclose your personal information to external parties
          except for trusted collaborators who assist in platform operations.
        

          We employ robust security measures to protect your personal
          information and ensure its integrity.
       
          By using the Rajasthan Police Feedback System, you consent to the
          practices outlined in this privacy policy.
        
          Thank you for participating in the Rajasthan Police Feedback System
          and trusting us with your information.
        </p>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Aboutus;