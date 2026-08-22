import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../Button/Button';
import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>Ready to scale your<br />digital presence?</h2>
            <p>Skip the vanity metrics. We build tailored marketing systems designed to drive actual revenue and sustainable growth for your business.</p>
            <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
              Start a Conversation
            </Button>
          </div>
          <div className="cta-visual">
            <div className="glow"></div>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Growth" className="cta-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
