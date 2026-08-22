import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import './TeamCard.scss';

const TeamCard = ({ member, index }) => {
  return (
    <motion.div 
      className="team-card card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="team-image-wrapper">
        <div className="gradient-ring"></div>
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>
      
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      
      <div className="team-social">
        {member.linkedin !== '#' && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}><FiLinkedin /></a>
        )}
        {member.instagram !== '#' && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Instagram`}><FiInstagram /></a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
