import React from 'react'
import '../styles/sidebar.css'
import logo from '../images/logo.png'

export const Sidebar = () => {
  return (
    <div class="sidebar">
      <div className='sidebar-title'>
        <img src={logo} alt='logo'/>
        <p>Certificate Collection System</p>
      </div>
      <nav>
      <div class="sidebar-link">
        <div>Dashboard</div>
      </div>
      <div class="sidebar-link">
        <div>Students</div>
      </div>
      <div class="sidebar-link">
        <div>Certificates</div>
      </div>
      <div class="sidebar-link">
        <div>Programs</div>
      </div>
      <div class="sidebar-link">
        <div>Collection Status</div>
      </div>
      <div class="sidebar-link">
        <div>Reports</div>
      </div>
      </nav>
      <div className='sidebar-profile'>
        <span className='user-name'>Bernice Akrong Adjei</span>
        <span className='view-profile'>View Profile</span>
      </div>
    </div>
  )
}
