import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrendingUp } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ProjectModal.scss';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const chartData = [
    { name: 'Month 1', followers: 2000, engagement: 2.5 },
    { name: 'Month 2', followers: 8500, engagement: 4.8 },
    { name: 'Month 3', followers: 15000, engagement: 7.2 },
    { name: 'Month 4', followers: 25400, engagement: 12.8 },
  ];

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content project-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>
          
          <div className="modal-header">
            <div className="modal-title-group">
              <span className="category-badge">{project.category}</span>
              <h2>{project.title}</h2>
              <p className="handle">{project.handle}</p>
            </div>
          </div>
          
          <div className="modal-body">
            <div className="modal-left">
              <img src={project.image} alt={project.title} className="modal-main-image" />
              
              <div className="modal-section mt-4">
                <h3>What We Did</h3>
                <ul className="check-list">
                  {project.whatWeDid.map((item, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="modal-right">
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p>{project.description}</p>
              </div>
              
              <div className="modal-section results-box">
                <h3>Results Overview</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <span className="result-value text-green">{project.results.followersGrowth}</span>
                    <span className="result-label">Followers</span>
                  </div>
                  <div className="result-item">
                    <span className="result-value text-blue">{project.results.reachGrowth}</span>
                    <span className="result-label">Reach</span>
                  </div>
                  <div className="result-item">
                    <span className="result-value text-purple">{project.results.engagementGrowth}</span>
                    <span className="result-label">Engagement</span>
                  </div>
                  <div className="result-item">
                    <span className="result-value text-orange">{project.results.websiteClicks}</span>
                    <span className="result-label">Clicks</span>
                  </div>
                </div>
              </div>
              
              {project.followers !== '-' && (
                <div className="modal-section">
                  <h3>Growth Trajectory</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8ECF5" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4F5B7A', fontSize: 12}} />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                        />
                        <Line type="monotone" dataKey="followers" stroke="#1769FF" strokeWidth={3} dot={{r: 4, fill: '#1769FF', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
