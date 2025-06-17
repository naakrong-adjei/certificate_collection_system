import React from 'react';
import '../styles/login.css';
import logo from '../images/logo.png';

export const Login = () => {
  return (
    <div className="login">
      <div className="left-section">
        <img src={logo} alt="School Logo" />
        <p className="footer">&copy; 2025 Your School Name. All rights reserved.</p>
      </div>
      <div className="right-section">
        <p className="title">Login to your dashboard</p>
        <form className="input-field">
          <input
            type="text"
            id="userId"
            placeholder="User ID"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
          />
          <div className='btn-text-section'>
            <button type="submit">Login</button>
            <p className='forgot-link'>Forgot your User Id or Password?</p>
          </div>
          
        </form>
      </div>
    </div>
  );
};
