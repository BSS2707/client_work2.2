import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiInstagram, FiMonitor, FiPenTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';

const iconMap = {
  instagram: <FiInstagram />,
  web: <FiMonitor />,
  design: <FiPenTool />
};

const ServiceCard = ({ service, index }) => {
  const isImageUrl = service.icon.startsWith('http');
  
  return (
    <motion.div 
      className="service-card card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="service-icon">
        {isImageUrl ? (
          <img src={service.icon} alt={service.title} />
        ) : (
          iconMap[service.icon]
        )}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Link to={service.path} className="btn-text">
        Explore {service.title.split(' ')[0]} <FiArrowRight />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
