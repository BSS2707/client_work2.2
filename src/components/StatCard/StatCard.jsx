import React from 'react';
import { motion } from 'framer-motion';
import './StatCard.scss';

const StatCard = ({ icon, number, label, index }) => {
  return (
    <motion.div 
      className="stat-card glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-content">
        <h3>{number}</h3>
        <p>{label}</p>
      </div>
      <div className="stat-graph">
        {/* Simple visual graph lines */}
        <svg viewBox="0 0 100 30" preserveAspectRatio="none">
          <path d="M0,30 L20,15 L40,25 L60,10 L80,20 L100,5" fill="none" stroke="#32A852" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};

export default StatCard;
