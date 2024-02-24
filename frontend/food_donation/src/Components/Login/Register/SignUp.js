import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../redux/UserSlice';
import "../Register/Register.css"

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileno: '', 
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.mobileno.trim()) {
      errors.mobileno = 'Mobile Number is required';
    } else if (!isValidMobileNumber(formData.mobileno)) {
      errors.mobileno = 'Invalid mobile number format';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      const { username, email, password, mobileno } = formData;
      try {
        await axios.post('http://localhost:8080/auth/register', { username, emailid: email, password, mobileno });
        dispatch(login({ username }));
        navigate('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="bobb">
      <div className="signup-page">
        <div className="signup-image-container"></div>
        <div className="signup-main-box">
          <div className="signup-container">
            <h1>SIGN UP</h1>
            <div className="signup-box">
              <div className="signup-username-box">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                <label>User Name</label>
                <p className="error-message">{validationErrors.username}</p>
              </div>
              <div className="signup-username-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label>Email</label>
                <p className="error-message">{validationErrors.email}</p>
              </div>
              <div className="signup-username-box">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <label>Password</label>
                <p className="error-message">{validationErrors.password}</p>
              </div>
              <div className="signup-username-box">
                <input
                  type="text"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleInputChange}
                  required
                />
                <label>Mobile Number</label>
                <p className="error-message">{validationErrors.mobileno}</p>
              </div>
              <p className="error-message">{errorMessage}</p>
              <div className="signup-button-box-outer">
                <div className="signup-button-box">
                  <input
                    onClick={handleSignUp}
                    type="button"
                    value="Sign Up"
                  />
                </div>
                <div className="already">
                  <p>Already have an account?</p>
                  <p onClick={() => navigate('/login')} className="link">
                    Log in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
