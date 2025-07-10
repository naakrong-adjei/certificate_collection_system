import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';
import logo from '../images/logo.png';
import {
  FiHome, FiUsers, FiAward, FiBook,
  FiBarChart2, FiFileText, FiSettings, FiUser
} from 'react-icons/fi';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img src={logo} alt="logo" />
        <p>CERTIFICATE COLLECTION SYSTEM</p>
      </div>

      <nav>
        <Link to="/home/dashboard" className={`sidebar-link ${isActive('/home/dashboard') ? 'active' : ''}`}>
          <FiHome className="sidebar-icon" />
          <div>Dashboard</div>
        </Link>

        <Link to="/home/certificates" className={`sidebar-link ${isActive('/home/certificates') ? 'active' : ''}`}>
          <FiAward className="sidebar-icon" />
          <div>Certificates</div>
        </Link>

        <Link to="/home/students" className={`sidebar-link ${isActive('/home/students') ? 'active' : ''}`}>
          <FiUsers className="sidebar-icon" />
          <div>Students</div>
        </Link>

        <Link to="/home/programs" className={`sidebar-link ${isActive('/home/programs') ? 'active' : ''}`}>
          <FiBook className="sidebar-icon" />
          <div>Programs</div>
        </Link>

        <Link to="/home/collection-status" className={`sidebar-link ${isActive('/home/collection-status') ? 'active' : ''}`}>
          <FiFileText className="sidebar-icon" />
          <div>Collection Status</div>
        </Link>

        <Link to="/home/reports" className={`sidebar-link ${isActive('/home/reports') ? 'active' : ''}`}>
          <FiBarChart2 className="sidebar-icon" />
          <div>Reports</div>
        </Link>
      </nav>

      <div className="sidebar-profile">
        <div className='user-icon-box'>
          <FiUser className='user-icon' />
        </div>

        <div className='left-box'>
          <span className="user-name">Bernice Akrong Adjei</span><br />
          <span className="view-profile">View Profile</span>
        </div>

        <div className='right-box'>
          <FiSettings className="settings-icon" />
        </div>
      </div>
    </div>
  );
};
