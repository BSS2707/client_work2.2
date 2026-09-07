import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import ProjectModal from '../ProjectModal/ProjectModal';
import './EditorialPortfolio.scss';

const EditorialPortfolio = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Take the top featured case studies
  const displayProjects = projects.slice(0, 4).map((p, idx) => ({
    ...p,
    year: p.year || (2024 + (idx % 2))
  }));

  return (
    <section className="editorial-portfolio-section" id="work">
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="container">
        <div className="portfolio-header">
          <div>
            <span className="label-micro">SELECTED WORK</span>
            <h2 className="editorial-title">PROOF OF SCALE</h2>
          </div>

          <Link to="/projects" className="view-all-link">
            <span>ALL CASE STUDIES</span>
            <FiArrowUpRight className="arrow" />
          </Link>
        </div>

        <div className="editorial-cases-list">
          {displayProjects.map((project, index) => (
            <motion.article
              key={project.id || index}
              className="editorial-case-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="case-content-grid">
                {/* Meta details */}
                <div className="case-meta-col">
                  <span className="case-index">0{index + 1}</span>
                  <div className="case-tags">
                    <span className="case-category">{project.category}</span>
                    <span className="case-dot">•</span>
                    <span className="case-year">{project.year}</span>
                  </div>
                  <h3 className="case-title">{project.title}</h3>
                  <p className="case-desc">{project.description}</p>

                  <button className="case-cta-btn" onClick={() => setSelectedProject(project)}>
                    <span>VIEW PROJECT</span>
                    <FiArrowUpRight className="arrow" />
                  </button>
                </div>

                {/* Big Visual Showcase */}
                <div className="case-visual-col">
                  <div className="case-image-frame">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="case-image"
                    />
                    <div className="case-image-overlay" />
                    <div className="case-hover-badge">
                      <span>DISCOVER CASE</span>
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialPortfolio;
