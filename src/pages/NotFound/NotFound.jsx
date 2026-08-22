import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '100px', background: 'linear-gradient(135deg, #32A852, #1769FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '24px' }}>404</h1>
      <h2 style={{ marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#4F5B7A', marginBottom: '32px', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button to="/" variant="primary" icon={<FiArrowLeft />}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
