import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import "./Privacy.css";

const FeedbackPrivacy = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>

        <p>
          Welcome to the Rajasthan Police Feedback System. We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data.
        </p>

        <h2>Information We Collect</h2>
        <p>
          The Rajasthan Police Feedback System may collect personal information
          when you interact with our platform, such as when you provide feedback
          or use our services.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the collected information for various purposes, including but
          not limited to:
        </p>

        <ul>
          <li>Facilitating the feedback process</li>
          <li>Improving our services</li>
          <li>Ensuring the security of the platform</li>
          <li>Communicating with users</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We prioritize the confidentiality of your information. We do not sell,
          trade, or disclose your personal information to external parties
          except for trusted collaborators who assist in platform operations.
        </p>

        <h2>Security</h2>
        <p>
          We employ robust security measures to protect your personal
          information and ensure its integrity.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using the Rajasthan Police Feedback System, you consent to the
          practices outlined in this privacy policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy, feel
          free to contact us through our
          <Link to="/contact"style={{ textDecoration: 'none' }}> Contact page</Link>.
        </p>

        <p>
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

export default FeedbackPrivacy;