import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlay, FiTrendingUp, FiZap, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Hero3DVisual from '../../components/3D/Hero3DVisual';
import InteractiveServices from '../../components/Services/InteractiveServices';
import EditorialPortfolio from '../../components/Portfolio/EditorialPortfolio';
import TeamCard from '../../components/TeamCard/TeamCard';
import CTASection from '../../components/CTASection/CTASection';
import VideoModal from '../../components/VideoModal/VideoModal';
import { getProjects } from '../../data/projects';
import { team } from '../../data/team';
import './Home.scss';

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const projects = getProjects();

  return (
    <div className="home-editorial-page">
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Hero Section */}
      <section className="editorial-hero">
        <div className="container hero-layout-container">
          <div className="hero-typography-col">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pulse-indicator" />
              <span>GROWTH IN MOTION // DIGITAL STUDIO</span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              WE DON'T JUST<br />
              BUILD BRANDS.<br />
              WE MAKE THEM<br />
              <span className="electric-word">GROW.</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A creative growth studio combining high-impact visual design, performance storytelling, and bespoke digital architecture to scale modern brands.
            </motion.p>

            <motion.div
              className="hero-buttons-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="hero-primary-btn">
                <span>Start a Project</span>
                <FiArrowUpRight className="arrow" />
              </Link>

              <button
                className="hero-video-trigger"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="play-icon-circle">
                  <FiPlay />
                </div>
                <span>Showreel (01:20)</span>
              </button>
            </motion.div>
          </div>

          <div className="hero-visualization-col">
            <Hero3DVisual />
          </div>
        </div>
      </section>

      {/* Full-Width Numbered Interactive Services */}
      <InteractiveServices />

      {/* Large Editorial Case Studies Portfolio */}
      <EditorialPortfolio projects={projects} />

      {/* Asymmetric About Section: SMALL IDEAS. BIG DIGITAL IMPACT. */}
      <section className="asymmetric-about-section">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-left-column">
              <span className="label-micro">MANIFESTO</span>
              <h2 className="about-giant-title">
                SMALL IDEAS.<br />
                <span className="highlight-text">BIG DIGITAL</span><br />
                IMPACT.
              </h2>
            </div>

            <div className="about-right-column">
              <p className="about-manifesto-p">
                We believe exceptional growth is engineered at the intersection of bold aesthetics and rigorous data. We operate not as a distant agency, but as an elite growth partner committed to multiplying your market valuation.
              </p>

              {/* Statistics & Proof Points */}
              <div className="about-metrics-grid">
                <div className="metric-box">
                  <span className="metric-num">250+</span>
                  <span className="metric-lbl">Deployments Delivered</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">98%</span>
                  <span className="metric-lbl">Client Retention Rate</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">12.8M</span>
                  <span className="metric-lbl">Monthly Impressions</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">3.4x</span>
                  <span className="metric-lbl">Average ROI Lift</span>
                </div>
              </div>

              <div className="about-link-wrap">
                <Link to="/about" className="editorial-about-btn">
                  <span>DISCOVER OUR PHILOSOPHY</span>
                  <FiArrowUpRight className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase Section */}
      <section className="editorial-team-section" id="team">
        <div className="container">
          <div className="team-header-row">
            <div>
              <span className="label-micro">THE COLLECTIVE</span>
              <h2 className="editorial-title">MINDS BEHIND THE MOTION</h2>
            </div>
            <Link to="/team" className="view-all-team-btn">
              <span>VIEW ALL TEAM</span>
              <FiArrowUpRight className="arrow" />
            </Link>
          </div>

          <div className="team-cards-grid">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Final CTA */}
      <CTASection />
    </div>
  );
};

export default Home;
