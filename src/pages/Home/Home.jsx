import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import StatCard from '../../components/StatCard/StatCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TeamCard from '../../components/TeamCard/TeamCard';
import CTASection from '../../components/CTASection/CTASection';
import VideoModal from '../../components/VideoModal/VideoModal';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { services } from '../../data/services';
import { getProjects } from '../../data/projects';
import { team } from '../../data/team';
import './Home.scss';

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = getProjects();

  const featuredProjects = [
    projects.find((project) => project.id === 'zorko'),
    ...projects.filter((project) => project.id !== 'zorko').slice(0, 2)
  ].filter(Boolean);
  const topTeam = team.slice(0, 4);

  return (
    <div className="home-page">
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <ProjectModal isOpen={!!selectedProject} project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              WE GROW BRANDS. YOU GROW BUSINESS.
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We <span className="text-gradient">Grow</span> Brands,<br />
              You Grow <span className="text-gradient">Business.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Data-driven strategies. Creative solutions. Measurable results that help your business stand out and succeed online.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button to="/contact" variant="primary" icon={<FiArrowRight />}>
                Get Started
              </Button>
              <Button onClick={() => setIsVideoOpen(true)} variant="outline" icon={<FiPlay />}>
                Watch Video
              </Button>
            </motion.div>
          </div>
          
          <div className="hero-visual">
            <motion.div 
              className="visual-composition animate-float-slow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="center-logo-circle">
                <img src="https://cdn.corenexis.com/f/pzO06agieXb.png" alt="GrowVora Logo" style={{ width: '75%', height: 'auto', objectFit: 'contain' }} />
              </div>
              
              {/* Floating elements would be absolutely positioned here */}
              <div className="floating-icon icon-1 animate-float">📈</div>
              <div className="floating-icon icon-2 animate-float" style={{animationDelay: '1s'}}>🎯</div>
              <div className="floating-icon icon-3 animate-float" style={{animationDelay: '2s'}}>👥</div>
              <div className="floating-icon icon-4 animate-float" style={{animationDelay: '0.5s'}}>📣</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard icon="💼" number="250+" label="Projects Completed" index={0} />
            <StatCard icon="👥" number="120+" label="Happy Clients" index={1} />
            <StatCard icon="⭐" number="98%" label="Client Satisfaction" index={2} />
            <StatCard icon="🏆" number="1+" label="Years Experience" index={3} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer comprehensive digital marketing solutions tailored to your business needs."
            centered
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-grid">
            <motion.div 
              className="why-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Why partner with us?</h2>
              <p>We're more than just another vendor; we operate as an extension of your in-house team.</p>
              
              <ul className="benefits-list">
                <li><FiCheckCircle className="text-green" /> Revenue-focused campaigns, not just vanity metrics</li>
                <li><FiCheckCircle className="text-green" /> Direct communication with the creators on your project</li>
                <li><FiCheckCircle className="text-green" /> Complete transparency on ad spend and reporting</li>
                <li><FiCheckCircle className="text-green" /> Zero cookie-cutter templates or outsourced work</li>
              </ul>
              
              <Button to="/about" variant="outline" className="mt-4">
                Know More About Us <FiArrowRight className="ml-2" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="why-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Target and achievement" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <SectionTitle title="Featured Projects" subtitle="See how we've helped businesses achieve their digital goals." />
            <Button to="/projects" variant="text">
              View All Projects <FiArrowRight />
            </Button>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <SectionTitle title="Meet Our Team" subtitle="The creative minds behind successful campaigns." />
            <Button to="/team" variant="text">
              View All Team <FiArrowRight />
            </Button>
          </div>
          
          <div className="team-grid">
            {topTeam.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
