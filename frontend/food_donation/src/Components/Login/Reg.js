import React, { useState } from 'react';
import axios from 'axios';

function Reg() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/v1/auth/staff/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Reg;
