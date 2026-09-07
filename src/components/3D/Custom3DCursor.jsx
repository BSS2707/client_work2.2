import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Custom3DCursor.scss';

const Custom3DCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing follower
  const springX = useSpring(cursorX, { stiffness: 450, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 28 });

  const dotSpringX = useSpring(cursorX, { stiffness: 1000, damping: 40 });
  const dotSpringY = useSpring(cursorY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    // Check if device is touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkInteractiveTarget = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, .tilt-card-3d-wrapper, .service-card, .project-card, .stat-card, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', checkInteractiveTarget);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', checkInteractiveTarget);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="custom-3d-cursor-container">
      {/* Outer 3D Halo Ring */}
      <motion.div
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className={`cursor-dot ${isHovered ? 'hovered' : ''}`}
        style={{
          x: dotSpringX,
          y: dotSpringY,
        }}
      />
    </div>
  );
};

export default Custom3DCursor;
