import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard3D = ({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  scale = 1.03,
  perspective = 1000,
  onClick,
  style = {}
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for organic motion
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;

    x.set(xPct);
    y.set(yPct);

    if (glare) {
      setGlarePos({
        x: (mouseX / rect.width) * 100,
        y: (mouseY / rect.height) * 100,
        opacity: 0.25
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    if (glare) {
      setGlarePos(prev => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      animate={{
        scale: isHovered ? scale : 1,
        transition: { duration: 0.25 }
      }}
    >
      <motion.div
        className="tilt-card-3d-inner"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative',
          borderRadius: 'inherit'
        }}
      >
        {children}

        {glare && (
          <div
            className="tilt-card-glare"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              borderRadius: 'inherit',
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, rgba(255, 255, 255, 0) 70%)`,
              transition: 'opacity 0.3s ease',
              mixBlendMode: 'overlay',
              zIndex: 30
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default TiltCard3D;
