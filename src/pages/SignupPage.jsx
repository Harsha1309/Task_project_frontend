import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import './index.css'

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        email,
        password,
        username
      });
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="page">
        <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
