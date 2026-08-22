import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';

// Instead of building a whole separate page with redundant UI, 
// we redirect to /projects and open the modal if we use the modal approach
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Basic redirect for now since we're using modals for project details
    navigate('/projects', { replace: true });
  }, [id, navigate]);
  
  return null;
};

export default ProjectDetails;
