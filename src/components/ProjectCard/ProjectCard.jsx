import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import TiltCard3D from '../3D/TiltCard3D';
import './ProjectCard.scss';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card-wrapper"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <TiltCard3D maxTilt={8} scale={1.02} className="project-tilt-container">
        <div className="project-card card">
          <div className="project-image">
            <img src={project.image} alt={project.title} loading="lazy" />
            <span className="category-badge">{project.category}</span>
          </div>
          
          <div className="project-info">
            <h3 className="project-title-3d">{project.title}</h3>
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
            
            <button className="btn-text project-action-btn mt-4" onClick={() => onClick(project)}>
              View Project <FiArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </TiltCard3D>
    </motion.div>
  );
};

export default ProjectCard;
