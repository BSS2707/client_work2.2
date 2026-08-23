import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import CTASection from '../../components/CTASection/CTASection';
import { getProjects } from '../../data/projects';
import '../Projects/Projects.scss';

const GraphicDesigning = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = getProjects();
  
  // Filter only design projects
  const designProjects = projects.filter(p => p.service === 'Branding' || p.service === 'Graphic Design');

  return (
    <div className="projects-page pt-20">
      <ProjectModal isOpen={!!selectedProject} project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      <div className="container">
        <div className="service-hero bg-gradient-green">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Graphic Designing</h1>
            <p>We design visuals that speak your brand's language and leave a lasting impression.</p>
          </motion.div>
          <div className="hero-icon-large">
            <img src="https://cdn-icons-png.flaticon.com/512/3283/3283286.png" alt="Graphic Design" />
          </div>
        </div>

        <motion.div className="projects-grid mb-20 mt-12" layout>
          <AnimatePresence>
            {designProjects.length > 0 ? (
              designProjects.map(project => (
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

export default GraphicDesigning;
