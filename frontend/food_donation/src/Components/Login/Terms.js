import React from 'react';
import "../Login/Terms.css";
import Footer from './Footer';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
function Terms() {
  return (
    <>
    <Navbar/>
    <br></br>
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <br></br>
      <h4>1. Acceptance of Terms</h4>
      <p>
      By accessing or using the System COPR, you agree to comply with and be bound by these terms.
      </p>
      <br></br>

      <h4>2. User Responsibilities</h4>
      <ul>
        <li>Users are responsible for providing accurate and truthful information when using this system.</li>
        <li>Users must not engage in any fraudulent, illegal, or harmful activities on the system.</li>
        <li>Users agree to follow all applicable local, state, and federal laws and regulations when using the system.</li>
      </ul>

      <h4>3. Feedback Submission</h4>
      <p>
      Users may submit feedback related to the performance, conduct, or any relevant matter concerning the Rajasthan Police.
      </p>
      <p>
      Submitted feedback must be accurate, lawful, and must not violate the rights of any third party. 
      </p>

      <h4>4. Prohibited Content</h4>
      <p>
        Users are prohibited from submitting content that is defamatory, obscene, offensive, or illegal.
      </p>
      <p>
        Content that infringes upon intellectual property rights, privacy, or any other legal rights is strictly prohibited.
      </p>

      <h4>5. Termination of Access</h4>
      <p>
      The Rajasthan Police reserves the right to terminate or restrict a user's access to the System for violations of these terms.
      </p>

      <h4>6. Legal Compliance</h4>
      <p>
         Users must comply with all applicable laws and regulations while using the System.
      </p>
      <p>
         False information or misuse of the System for illegal purposes may result in legal action.
      </p>

      <h4>7. Changes to Terms and Conditions</h4>
      <p>
        These terms and conditions may be updated or modified at any time without prior notice.
      </p>
      <p>
         Users are responsible for regularly reviewing these terms for any changes.
      </p>
    
      <h4>8. Contact Information</h4>
      <p>
         For any inquiries or concerns regarding the Rajasthan Police Feedback System, users may contact [provide contact details].
      </p>

      <h4>9. Governing Law</h4>
      <p>
        These Terms and Conditions are governed by the laws of . Any disputes arising from the use of the App shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
      </p>

      <h4>10. Governing Law</h4>
      <p>
        These terms and conditions are governed by the laws of the state of Rajasthan, India.
      </p>
<br></br>

      <p>
      By using the Rajasthan Police Feedback System, you acknowledge that you have read, understood, and agreed to these terms and conditions.
      </p>
    </div>
    <br></br>
    <br></br>
    <Footer/>
    </>
  );
}

export default Terms;