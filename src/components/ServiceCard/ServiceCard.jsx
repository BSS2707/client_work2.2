import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiInstagram, FiMonitor, FiPenTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import TiltCard3D from '../3D/TiltCard3D';
import './ServiceCard.scss';

const iconMap = {
  instagram: <FiInstagram />,
  web: <FiMonitor />,
  design: <FiPenTool />
};

const ServiceCard = ({ service, index }) => {
  const isImageUrl = service.icon && service.icon.startsWith('http');
  
  return (
    <motion.div 
      className="service-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard3D maxTilt={10} scale={1.02} className="service-tilt-container">
        <div className="service-card card">
          <div className="service-icon-3d">
            {isImageUrl ? (
              <img src={service.icon} alt={service.title} />
            ) : (
              iconMap[service.icon] || <FiMonitor />
            )}
          </div>
          <h3 className="service-title-3d">{service.title}</h3>
          <p className="service-desc-3d">{service.description}</p>
          <ul className="service-features">
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <Link to={service.path} className="btn-text service-link-3d">
            Explore {service.title.split(' ')[0]} <FiArrowRight className="arrow-icon" />
          </Link>
        </div>
      </TiltCard3D>
    </motion.div>
  );
};

export default ServiceCard;
