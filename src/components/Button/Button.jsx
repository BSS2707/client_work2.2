import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  type = 'button',
  className = '',
  icon
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
