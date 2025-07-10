import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import logo from '../images/logo.png';

export const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Realtime error clearing
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    if (errors.userId) {
      setErrors((prev) => ({ ...prev, userId: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!userId.trim()) newErrors.userId = 'User ID is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      // Login success
      navigate('/home');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login">
      {/* Left section */}
      <div className="left-section">
        <img src={logo} alt="School Logo" className="logo" />
        <p className="footer">&copy; 2025 Your School Name. All rights reserved.</p>
      </div>

      {/* Right section */}
      <div className="right-section">
        <h2 className="title">Login to your dashboard</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={handleUserIdChange}
            className={errors.userId ? 'input-error' : ''}
          />
          {errors.userId && <span className="error-message">{errors.userId}</span>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          <div className="form-bottom">
            <button type="submit">Login</button>
            <p className="forgot-link">Forgot your User ID or Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};
