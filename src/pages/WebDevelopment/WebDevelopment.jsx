import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import CTASection from '../../components/CTASection/CTASection';
import { getProjects } from '../../data/projects';
import '../Projects/Projects.scss';

const WebDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = getProjects();
  
  // Filter only web projects
  const webProjects = projects.filter(p => p.service === 'Web Development');

  return (
    <div className="projects-page pt-20">
      <ProjectModal isOpen={!!selectedProject} project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      <div className="container">
        <div className="service-hero bg-gradient-blue">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Web Development</h1>
            <p>Fast, secure, SEO-friendly and responsive websites that give your business a strong online presence.</p>
          </motion.div>
          <div className="hero-icon-large">
            <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="Web Development" />
          </div>
        </div>

        <motion.div className="projects-grid mb-20 mt-12" layout>
          <AnimatePresence>
            {webProjects.length > 0 ? (
              webProjects.map(project => (
                <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
              ))
            ) : (
              <div className="no-results">
                <h3>More projects coming soon...</h3>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default WebDevelopment;
