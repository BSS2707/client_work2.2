import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './ProjectCard.scss';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="category-badge">{project.category}</span>
      </div>
      
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="handle">{project.handle}</p>
        
        {project.followers !== '-' && (
          <div className="project-metrics">
            <div className="metric">
              <strong>{project.followers}</strong>
              <span>Followers Gained</span>
            </div>
            <div className="metric">
              <strong>{project.reach}</strong>
              <span>Reach</span>
            </div>
            <div className="metric">
              <strong>{project.engagement}</strong>
              <span>Engagement</span>
            </div>
          </div>
        )}
        
        <button className="btn-text mt-4" onClick={() => onClick(project)}>
          View Project <FiArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
