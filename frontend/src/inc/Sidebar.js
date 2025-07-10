import React from 'react';
import '../styles/sidebar.css';
import logo from '../images/logo.png';
import { FiHome, FiUsers, FiAward, FiBook, FiBarChart2, FiFileText, FiSettings, FiUser } from 'react-icons/fi';

export const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img src={logo} alt="logo" />
        <p>CERTIFICATE COLLECTION SYSTEM</p>
      </div>

      <nav>
        <div
          className={`sidebar-link ${activePage === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActivePage('Dashboard')}
        >
          <FiHome className="sidebar-icon" />
          <div>Dashboard</div>
        </div>

        <div
          className={`sidebar-link ${activePage === 'Certificates' ? 'active' : ''}`}
          onClick={() => setActivePage('Certificates')}
        >
          <FiAward className="sidebar-icon" />
          <div>Certificates</div>
        </div>

        <div
          className={`sidebar-link ${activePage === 'Students' ? 'active' : ''}`}
          onClick={() => setActivePage('Students')}
        >
          <FiUsers className="sidebar-icon" />
          <div>Students</div>
        </div>
        
        <div
          className={`sidebar-link ${activePage === 'Programs' ? 'active' : ''}`}
          onClick={() => setActivePage('Programs')}
        >
          <FiBook className="sidebar-icon" />
          <div>Programs</div>
        </div>

        <div
          className={`sidebar-link ${activePage === 'Collection Status' ? 'active' : ''}`}
          onClick={() => setActivePage('Collection Status')}
        >
          <FiFileText className="sidebar-icon" />
          <div>Collection Status</div>
        </div>

        <div
          className={`sidebar-link ${activePage === 'Reports' ? 'active' : ''}`}
          onClick={() => setActivePage('Reports')}
        >
          <FiBarChart2 className="sidebar-icon" />
          <div>Reports</div>
        </div>
        
      </nav>

      <div className="sidebar-profile">
        <div className='user-icon-box'>
          <FiUser className='user-icon'/>
        </div>
        
        <div className='left-box'>
          <span className="user-name">Bernice Akrong Adjei
          </span><br/>
          <span className="view-profile">View Profile</span>
        </div>
        <div className='right-box'>
          <FiSettings className="settings-icon" />
        </div>
      </div>
    </div>
  );
};
