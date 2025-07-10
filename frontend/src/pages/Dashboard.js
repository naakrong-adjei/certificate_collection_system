import React from 'react';
import '../styles/dashboard.css'; // Import your custom CSS

export const Dashboard = () => {
  const stats = [
    { label: 'Total Requests Today', value: 200, change: '+21.01%', positive: true },
    { label: 'Certificates Issued', value: 50, change: '+21.01%', positive: true },
    { label: 'Pending Approvals', value: 215, change: '+21.01%', positive: true },
    { label: 'Rejected Requests', value: 10, change: '-2.01%', positive: false }
  ];

  const requests = [
    {
      serial: 1,
      name: 'Akrong Adjei Naa Adjorkor',
      type: 'Transcript',
      date: '2023-10-01',
      status: 'Approved'
    },
    {
      serial: 2,
      name: 'Akrong Adjei Naa Adjorkor',
      type: 'Certificate',
      date: '2023-10-01',
      status: 'Pending'
    },
    {
      serial: 3,
      name: 'Akrong Adjei Naa Adjorkor',
      type: 'Certificate',
      date: '2023-10-01',
      status: 'Approved'
    },
    {
      serial: 4,
      name: 'Akrong Adjei Naa Adjorkor',
      type: 'Transcript',
      date: '2023-10-01',
      status: 'Rejected'
    },
    {
      serial: 5,
      name: 'Akrong Adjei Naa Adjorkor',
      type: 'Transcript',
      date: '2023-10-01',
      status: 'Rejected'
    },
  ];

  const notifications = [
    'New transcript request from Bernice Adjei',
    'New certificate request from Bernice Adjei',
    'System upgrade scheduled for June 8',
    'Reminder: Review rejected requests'
  ];

  return (
    <div className="dashboard-container">
      <h1>Hello Bernice 👋</h1>

      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
            <p className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="main-content">
        {/* Left - Table */}
        <div className="table-section">
          <h2>Recent Certificate Requests</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Certificate Type</th>
                <th>Date Requested</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, index) => (
                <tr key={index}>
                  <td>#{req.serial}</td>
                  <td>{req.name}</td>
                  <td>{req.type}</td>
                  <td>{req.date}</td>
                  <td className={`status ${req.status.toLowerCase()}`}>{req.status}</td>
                  <td><a href="#">View</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right - Notifications and Chart */}
        <div className="right-section">
          <h2>Notifications</h2>
          <ul className="notifications">
            {notifications.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>

          <div className="chart-placeholder">
            <h3>Certificate Statistics</h3>
            <div className="pie">Pie Chart Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
};
