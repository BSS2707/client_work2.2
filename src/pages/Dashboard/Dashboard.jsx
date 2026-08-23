import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addProject, getProjects } from '../../data/projects';
import './Dashboard.scss';

const emptyForm = {
  title: '',
  category: 'Food',
  service: 'Instagram',
  image: '',
  description: ''
};

const Dashboard = () => {
  const [projects, setProjects] = useState(() => getProjects());
  const [form, setForm] = useState(emptyForm);

  const spotlightProjects = [
    projects.find((project) => project.id === 'zorko'),
    ...projects.filter((project) => project.id !== 'zorko').slice(0, 2)
  ].filter(Boolean);

  const stats = [
    { label: 'Active Projects', value: String(projects.length), change: '+2 this month' },
    { label: 'Campaign Reach', value: '5.4M', change: '+18% growth' },
    { label: 'Avg. Engagement', value: '9.7%', change: '+1.8% vs last month' },
    { label: 'Leads Generated', value: '1.2K', change: '+26% conversion lift' }
  ];

  const activityFeed = [
    { title: 'Zorko launch campaign published', detail: 'Brand and reel strategy went live.', time: '2 hours ago', tone: 'success' },
    { title: 'New creative sprint started', detail: 'Instagram strategy update for the food portfolio.', time: '6 hours ago', tone: 'info' },
    { title: 'Content performance surged', detail: 'Short-form content reached a new high on weekly engagement.', time: '1 day ago', tone: 'warning' },
    { title: 'Client report shared', detail: 'Performance summary sent to the Growth team.', time: '2 days ago', tone: 'neutral' }
  ];

  const updates = [
    { title: 'Zorko brand refresh', status: 'Live', text: 'New identity and reel-first storytelling are active and performing well.' },
    { title: 'Instagram execution plan', status: 'In Review', text: 'Content calendar and short-form tactics are being refined for new launches.' },
    { title: 'Conversion optimization', status: 'Improving', text: 'Landing pages and content hooks are being tested for stronger click-through and lead capture.' },
    { title: 'Portfolio expansion', status: 'New', text: 'Fresh service showcases and client wins are being added to the case studies library.' }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      return;
    }

    const newProject = {
      id: `${form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${Date.now()}`,
      title: form.title.trim(),
      category: form.category || 'Food',
      service: form.service || 'Instagram',
      handle: `@${form.title.trim().toLowerCase().replace(/\s+/g, '')}`,
      followers: 'New',
      reach: 'New',
      engagement: 'New',
      image: form.image || 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
      description: form.description.trim(),
      results: {
        followersGrowth: 'New',
        reachGrowth: 'New',
        engagementGrowth: 'New',
        websiteClicks: 'New'
      },
      whatWeDid: ['Content Strategy', 'Reel Production', 'Audience Growth', 'Campaign Execution']
    };

    addProject(newProject);
    setProjects(getProjects());
    setForm(emptyForm);
  };

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

        <section className="panel panel-form">
          <div className="panel-header">
            <h2>Add new project</h2>
          </div>

          <form className="project-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                <span>Project name</span>
                <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter project name" />
              </label>

              <label>
                <span>Category</span>
                <select name="category" value={form.category} onChange={handleChange}>
                  <option value="Food">Food</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Travel">Travel</option>
                  <option value="Technology">Technology</option>
                </select>
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Service</span>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="Instagram">Instagram</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Branding">Branding</option>
                  <option value="Graphic Design">Graphic Design</option>
                </select>
              </label>

              <label>
                <span>Image URL</span>
                <input type="url" name="image" value={form.image} onChange={handleChange} placeholder="https://example.com/image.jpg" />
              </label>
            </div>

            <label>
              <span>Description</span>
              <textarea name="description" value={form.description} onChange={handleChange} rows="4" placeholder="Describe the project result, campaign, or reel strategy" />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Save project</button>
            </div>
          </form>
        </section>

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
