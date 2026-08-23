import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import CTASection from '../../components/CTASection/CTASection';
import { getProjects } from '../../data/projects';
import '../Projects/Projects.scss';

const InstagramManagement = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = getProjects();
  const instagramProjects = projects.filter(p => p.service === 'Instagram');
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = ['All Projects', 'Fashion', 'Food', 'Fitness', 'Education', 'Travel', 'Beauty', 'Technology'];

  const filteredProjects = activeCategory === 'All Projects'
    ? instagramProjects
    : instagramProjects.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page pt-20">
      <ProjectModal isOpen={!!selectedProject} project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="container">
        <div className="service-hero bg-gradient-purple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Instagram Management</h1>
            <p>We help brands grow on Instagram with creative content, smart strategy and real results.</p>
          </motion.div>
          <div className="hero-icon-large">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
          </div>
        </div>

        <div className="filters-container mt-12 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid mb-20" layout>
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
              ))
            ) : (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3>No projects found</h3>
                <p>Try another category or clear filters.</p>
                <button className="btn btn-outline mt-4" onClick={() => setActiveCategory('All Projects')}>
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
};

export default InstagramManagement;
