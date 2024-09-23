import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './SignupPage.css'; // Import the CSS file
const API_URL = 'http://localhost:5000/api';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to the home page on success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-container">
        <h1 className="signup-title">Signup</h1>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="signup-input"
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signup-input"
          />
        </div>
        <button onClick={handleSignup} className="signup-button">Signup</button>
      </div>
    </div>
  );
};

export default SignupPage;
