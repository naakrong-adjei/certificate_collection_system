import React from 'react';
import '../styles/sidebar.css';
import logo from '../images/logo.png';
import { FiHome, FiUser, FiAward, FiBook, FiBarChart2, FiFileText } from 'react-icons/fi';

export const Sidebar = ({ setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img src={logo} alt="logo" />
        <p>Certificate System</p>
      </div>

      <nav>
        <div className="sidebar-link" onClick={() => setActivePage?.('Dashboard')}>
          <FiHome className="sidebar-icon" />
          <div>Dashboard</div>
        </div>
        <div className="sidebar-link" onClick={() => setActivePage?.('Students')}>
          <FiUser className="sidebar-icon" />
          <div>Students</div>
        </div>
        <div className="sidebar-link" onClick={() => setActivePage?.('Certificates')}>
          <FiAward className="sidebar-icon" />
          <div>Certificates</div>
        </div>
        <div className="sidebar-link" onClick={() => setActivePage?.('Programs')}>
          <FiBook className="sidebar-icon" />
          <div>Programs</div>
        </div>
        <div className="sidebar-link" onClick={() => setActivePage?.('Collection')}>
          <FiFileText className="sidebar-icon" />
          <div>Collection Status</div>
        </div>
        <div className="sidebar-link" onClick={() => setActivePage?.('Reports')}>
          <FiBarChart2 className="sidebar-icon" />
          <div>Reports</div>
        </div>
      </nav>

      <div className="sidebar-profile">
        <span className="user-name">Bernice Akrong Adjei</span>
        <span className="view-profile">View Profile</span>
      </div>
    </div>
  );
};
