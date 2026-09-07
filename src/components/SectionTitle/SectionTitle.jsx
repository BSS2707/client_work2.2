import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div 
      className={`section-title ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '40px', textAlign: centered ? 'center' : 'left' }}
    >
      <h2 className="editorial-section-heading" style={{ marginBottom: '16px' }}>{title}</h2>
      {subtitle && <p className="editorial-section-sub" style={{ maxWidth: centered ? '600px' : '520px', margin: centered ? '0 auto' : '0' }}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
