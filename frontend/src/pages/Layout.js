import React, { useState } from 'react';

import '../styles/layout.css';
import {Sidebar} from '../inc/Sidebar';
import {Header} from '../inc/Header';

import { Dashboard, Students,Certificates, Programs, CollectionStatus, Reports } from '../pages';



export const Layout = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Students':
        return <Students />;
      case 'Certificates':
        return <Certificates />;
      case 'Programs':
        return <Programs />;
      case 'Collection':
        return <CollectionStatus />;
      case 'Reports':
        return <Reports />;
      case 'Dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="home">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="main-container">
        <Header />
        <div className="content">
          {renderActivePage()}
        </div>
      </div>
    </div>
  );
};


