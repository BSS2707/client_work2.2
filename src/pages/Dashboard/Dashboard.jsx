import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './Dashboard.scss';

const Dashboard = () => {
  const spotlightProjects = [
    projects.find((project) => project.id === 'zorko'),
    ...projects.filter((project) => project.id !== 'zorko').slice(0, 2)
  ].filter(Boolean);

  const stats = [
    { label: 'Active Projects', value: '08', change: '+2 this month' },
    { label: 'Campaign Reach', value: '5.4M', change: '+18% growth' },
    { label: 'Avg. Engagement', value: '9.7%', change: '+1.8% vs last month' },
    { label: 'Leads Generated', value: '1.2K', change: '+26% conversion lift' }
  ];

  const activityFeed = [
    { title: 'Zorko launch campaign published', detail: 'Brand and landing page refresh went live.', time: '2 hours ago', tone: 'success' },
    { title: 'New creative sprint started', detail: 'Instagram strategy update for the beauty portfolio.', time: '6 hours ago', tone: 'info' },
    { title: 'Website traffic surged', detail: 'Organic visitor growth crossed 2.4M monthly reach.', time: '1 day ago', tone: 'warning' },
    { title: 'Client report shared', detail: 'Performance summary sent to the Growth team.', time: '2 days ago', tone: 'neutral' }
  ];

  const updates = [
    { title: 'Zorko brand refresh', status: 'Live', text: 'New identity and performance-ready landing page are now active on the client side.' },
    { title: 'Instagram execution plan', status: 'In Review', text: 'Content calendar and short-form tactics are being refined for Q4 growth.' },
    { title: 'Conversion optimization', status: 'Improving', text: 'Landing pages are being tested for stronger click-through and lead capture.' },
    { title: 'Portfolio expansion', status: 'New', text: 'Fresh service showcases and client wins are being added to the case studies library.' }
  ];

  return (
    <div className="dashboard-page pt-20">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">Client dashboard</p>
            <h1>Performance overview</h1>
          </div>
          <Link to="/projects" className="btn btn-primary">View all projects</Link>
        </div>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.change}</small>
            </div>
          ))}
        </section>

        <div className="dashboard-layout">
          <section className="panel panel-large">
            <div className="panel-header">
              <h2>Recent projects</h2>
              <Link to="/projects">See all</Link>
            </div>

            <div className="recent-projects-grid">
              {spotlightProjects.map((project) => (
                <div key={project.id} className="project-mini-card">
                  <img src={project.image} alt={project.title} />
                  <div className="mini-card-body">
                    <div className="mini-card-topline">
                      <span className="tag">{project.service}</span>
                      <span className="metric">{project.engagement}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="mini-card-footer">
                      <span>{project.category}</span>
                      <strong>{project.results.reachGrowth}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="panel panel-side">
            <div className="panel-header">
              <h2>Activity</h2>
            </div>

            <ul className="activity-list">
              {activityFeed.map((item) => (
                <li key={item.title} className={`activity-item ${item.tone}`}>
                  <div className="activity-dot" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="panel panel-full">
          <div className="panel-header">
            <h2>All new updates</h2>
          </div>

          <div className="updates-list">
            {updates.map((update) => (
              <div key={update.title} className="update-item">
                <div className="update-meta">
                  <h3>{update.title}</h3>
                  <span className="status-badge">{update.status}</span>
                </div>
                <p>{update.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
