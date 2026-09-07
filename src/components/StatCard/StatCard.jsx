import React from 'react';
import { motion } from 'framer-motion';
import TiltCard3D from '../3D/TiltCard3D';
import './StatCard.scss';

const StatCard = ({ icon, number, label, index }) => {
  return (
    <motion.div 
      className="stat-card-wrapper"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <TiltCard3D maxTilt={14} scale={1.04} className="stat-tilt-container">
        <div className="stat-card glass-card">
          <div className="stat-icon-3d">
            {icon}
          </div>
          <div className="stat-content-3d">
            <h3 className="stat-number">{number}</h3>
            <p className="stat-label">{label}</p>
          </div>
          <div className="stat-graph-3d">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0,30 L20,15 L40,25 L60,10 L80,20 L100,5" fill="none" stroke="#32A852" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </TiltCard3D>
    </motion.div>
  );
};

export default StatCard;
