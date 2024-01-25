import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/users/user_actions';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

export default function Loginpage() {
  const { auth } = useSelector((state) => state.userReducer);
  const nav = useNavigate();
  
  if (auth) {
    nav('/notes');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Sign in to your account</h1>
        <div className="login-box">
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="button-container">
            <button className="login-btn" onClick={handleLogin}>
           
              Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
