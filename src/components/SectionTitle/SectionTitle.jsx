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
      style={{ marginBottom: '48px', textAlign: centered ? 'center' : 'left' }}
    >
      <h2 style={{ marginBottom: '16px', color: '#0B1746' }}>{title}</h2>
      {subtitle && <p style={{ color: '#4F5B7A', maxWidth: centered ? '600px' : '500px', margin: centered ? '0 auto' : '0' }}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
