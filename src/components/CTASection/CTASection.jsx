import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="fullscreen-editorial-cta">
      <div className="container">
        <motion.div
          className="cta-editorial-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-micro">NEXT STEPS</span>

          <h2 className="cta-giant-headline">
            READY TO<br />
            <span className="accent-glow">GROW BEYOND</span><br />
            EXPECTATIONS?
          </h2>

          <p className="cta-subtext">
            We partner with ambitious founders and brands to engineer exponential digital growth. Let's build something unforgettable.
          </p>

          <div className="cta-action-area">
            <Link to="/contact" className="magnetic-cta-btn">
              <span>START A PROJECT</span>
              <FiArrowUpRight className="cta-arrow" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
