import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import TiltCard3D from '../3D/TiltCard3D';
import './TeamCard.scss';

const TeamCard = ({ member, index }) => {
  return (
    <motion.div 
      className="team-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <TiltCard3D maxTilt={10} scale={1.03} className="team-tilt-container">
        <div className="team-card card">
          <div className="team-image-wrapper">
            <div className="gradient-ring"></div>
            <img src={member.image} alt={member.name} loading="lazy" />
          </div>
          
          <h3 className="team-name-3d">{member.name}</h3>
          <p className="role">{member.role}</p>
          
          <div className="team-social">
            {member.linkedin !== '#' && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}><FiLinkedin /></a>
            )}
            {member.instagram !== '#' && (
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Instagram`}><FiInstagram /></a>
            )}
          </div>
        </div>
      </TiltCard3D>
    </motion.div>
  );
};

export default TeamCard;
