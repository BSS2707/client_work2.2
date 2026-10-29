import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiZap, FiAward } from 'react-icons/fi';
import './Hero3DVisual.scss';

const Hero3DVisual = () => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D parallax
  const springX = useSpring(mouseX, { stiffness: 120, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 14 });

  const rotateX = useTransform(springY, [-200, 200], [16, -16]);
  const rotateY = useTransform(springX, [-200, 200], [-16, 16]);

  // Differential parallax for floating child layers
  const floatLayer1X = useTransform(springX, [-200, 200], [-20, 20]);
  const floatLayer1Y = useTransform(springY, [-200, 200], [-20, 20]);

  const floatLayer2X = useTransform(springX, [-200, 200], [25, -25]);
  const floatLayer2Y = useTransform(springY, [-200, 200], [25, -25]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="hero-3d-clean-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="hero-3d-pivot"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Concentric Geometric Orbit Rings */}
        <div className="orbit-ring ring-outer" />
        <div className="orbit-ring ring-mid" />
        <div className="orbit-ring ring-inner" />

        {/* Ambient Glowing Halo */}
        <div className="hero-center-halo" />

        {/* Central 3D Brand Emblem Orb */}
        <motion.div
          className="hero-brand-core"
          style={{ translateZ: 50 }}
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="core-glass-disc">
            <div className="logo-glow-layer" />
            <img
              src="/logo.png"
              alt="GrowVora Logo"
              className="core-logo-image"
            />
            <div className="core-brand-tag">
              <span className="live-dot" />
              <span>GROWVORA 3D</span>
            </div>
          </div>
        </motion.div>

        {/* Floating 3D Badge 1: +340% ROI */}
        <motion.div
          className="floating-metric-badge badge-roi"
          style={{
            x: floatLayer1X,
            y: floatLayer1Y,
            translateZ: 95,
          }}
          whileHover={{ scale: 1.08, translateZ: 120 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="badge-icon green">
            <FiTrendingUp />
          </div>
          <div className="badge-content">
            <span className="badge-label">Conversion Growth</span>
            <span className="badge-value">+340% <span className="highlight">ROI</span></span>
          </div>
        </motion.div>

        {/* Floating 3D Badge 2: Precision Audience */}
        <motion.div
          className="floating-metric-badge badge-target"
          style={{
            x: floatLayer2X,
            y: floatLayer2Y,
            translateZ: 80,
          }}
          whileHover={{ scale: 1.08, translateZ: 110 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="badge-icon white">
            <FiTarget />
          </div>
          <div className="badge-content">
            <span className="badge-label">Audience Match</span>
            <span className="badge-value">99.8% Precision</span>
          </div>
        </motion.div>

        {/* Floating 3D Badge 3: Active Scale */}
        <motion.div
          className="floating-metric-badge badge-impressions"
          style={{
            x: floatLayer1X,
            y: floatLayer2Y,
            translateZ: 90,
          }}
          whileHover={{ scale: 1.08, translateZ: 115 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="badge-icon green">
            <FiZap />
          </div>
          <div className="badge-content">
            <span className="badge-label">Active Traction</span>
            <span className="badge-value">12.8M+ Reach</span>
          </div>
        </motion.div>

        {/* Floating 3D Badge 4: Top Rating */}
        <motion.div
          className="floating-metric-badge badge-trust"
          style={{
            x: floatLayer2X,
            y: floatLayer1Y,
            translateZ: 70,
          }}
          whileHover={{ scale: 1.08, translateZ: 105 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="badge-icon white">
            <FiAward />
          </div>
          <div className="badge-content">
            <span className="badge-label">Client Trust</span>
            <span className="badge-value">★ 4.9/5 Rating</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero3DVisual;
