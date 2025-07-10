import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import '../styles/layout.css';
import { Sidebar } from '../inc/Sidebar';
import { Header } from '../inc/Header';

import {
  Dashboard,
  Students,
  Certificates,
  Programs,
  CollectionStatus,
  Reports
} from '../pages';

export const Layout = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="programs" element={<Programs />} />
            <Route path="collection-status" element={<CollectionStatus />} />
            <Route path="reports" element={<Reports />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
