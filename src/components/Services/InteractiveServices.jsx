import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './InteractiveServices.scss';

const servicePillars = [
  {
    num: '01',
    title: 'INSTAGRAM MANAGEMENT',
    subtitle: 'Organic Growth, Content Strategy & Reels',
    description: 'We craft high-converting content strategies, short-form viral storytelling, and hyper-targeted paid acquisition campaigns that turn followers into brand advocates.',
    tags: ['Content Strategy', 'Reels & TikTok', 'Paid Meta Ads', 'Community Growth'],
    path: '/instagram-management'
  },
  {
    num: '02',
    title: 'WEB DEVELOPMENT',
    subtitle: 'Custom Modern Web Experiences & Platforms',
    description: 'We build ultra-fast, motion-driven interactive websites engineered for lead generation, seamless e-commerce, and memorable brand prestige.',
    tags: ['Custom React / Vite', 'Motion Design', 'SEO & Speed', 'Conversion Architecture'],
    path: '/web-development'
  },
  {
    num: '03',
    title: 'GRAPHIC DESIGNING',
    subtitle: 'Brand Identity Systems, Visuals & Pitch Decks',
    description: 'From avant-garde visual identities to complete design systems, we build coherent aesthetics that captivate your audience and outpace the competition.',
    tags: ['Logo Systems', 'Design Guidelines', 'Pitch Decks', 'Art Direction'],
    path: '/graphic-designing'
  },
  {
    num: '04',
    title: 'DIGITAL GROWTH & ADS',
    subtitle: 'End-to-End Scale, Funnels & Strategy',
    description: 'Full-funnel growth architecture combining market research, brand positioning, performance analytics, and rapid experimentation to dominate your market.',
    tags: ['Market Positioning', 'Funnel Optimization', 'ROI Tracking', 'Omnichannel Strategy'],
    path: '/contact'
  }
];

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="interactive-services-section" id="services">
      <div className="container">
        <div className="section-meta-header">
          <span className="label-micro">WHAT WE DO</span>
          <h2 className="editorial-title">DISCIPLINES OF GROWTH</h2>
        </div>

        <div className="services-interactive-list">
          {servicePillars.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.num}
                className={`service-interactive-row ${isActive ? 'is-expanded' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                {/* Accent Expanding Line */}
                <div className="row-accent-line" />

                <div className="row-main-bar">
                  <div className="row-left">
                    <span className="row-number">{service.num}</span>
                    <span className="row-separator">—</span>
                    <h3 className="row-title">{service.title}</h3>
                  </div>

                  <div className="row-right">
                    <span className="row-subtitle">{service.subtitle}</span>
                    <Link to={service.path} className="row-explore-btn" aria-label={`Explore ${service.title}`}>
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="row-expanded-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="expanded-inner">
                        <p className="expanded-desc">{service.description}</p>
                        
                        <div className="expanded-tags">
                          {service.tags.map((tag, i) => (
                            <span key={i} className="service-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link to={service.path} className="expanded-link-btn">
                          <span>EXPLORE CAPABILITIES</span>
                          <FiArrowUpRight className="arrow" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;
