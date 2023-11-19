import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  const nav = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`homepage-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="content-section">
        <div className="text-content">
          <h1>Notes Taking App</h1>
          <p>When your heart speaks, take good notes.”</p>
          <p> - Judith Exner</p>
          <div className="button-section">
            <button className="login-button" onClick={() => { nav("/login") }}>Log In</button>
            <button className="signup-button" onClick={() => { nav("/register") }}>Sign Up</button>
            {/* <button className="theme-toggle-button" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
