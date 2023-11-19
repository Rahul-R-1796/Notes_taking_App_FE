import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/config';
import './Signuppage.css';

export default function Signuppage() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      const data = await axios.post(BASE_URL + '/user/register', {
        name,
        email,
        password,
      });
      const { message, status } = data.data;
      if (status === 1) {
        alert(message);
        nav('/login');
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Error occurred while signing up:', error);
      // Handle error gracefully
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Sign up</h1>
        <div className="signup-box">
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button
                className="show-password-btn"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="button-container">
            <button className="signup-btn" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
          <div className="login-link">
            <p>
              Already a user?{' '}
              <span className="login-link" onClick={() => nav('/login')}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
