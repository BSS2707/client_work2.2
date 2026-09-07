import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.scss';

const statusPhases = [
  '● Planting Ideas',
  '● Growing Brands',
  '● Creating Impact',
  '● Scaling Digital'
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [hasLoadedBefore, setHasLoadedBefore] = useState(() => {
    return sessionStorage.getItem('growvora_preloaded') === 'true';
  });
  
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [showFinalCall, setShowFinalCall] = useState(false);
  const [isDone, setIsDone] = useState(hasLoadedBefore);

  useEffect(() => {
    if (hasLoadedBefore) {
      if (onLoadingComplete) onLoadingComplete();
      return;
    }

    const duration = 2000; // 2 seconds total
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsFinishing(true);
          setShowFinalCall(true);

          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('growvora_preloaded', 'true');
            if (onLoadingComplete) onLoadingComplete();
          }, 650);

          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasLoadedBefore, onLoadingComplete]);

  useEffect(() => {
    if (hasLoadedBefore) return;
    if (progress < 25) setPhaseIndex(0);
    else if (progress < 50) setPhaseIndex(1);
    else if (progress < 75) setPhaseIndex(2);
    else setPhaseIndex(3);
  }, [progress, hasLoadedBefore]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="cinematic-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="preloader-inner">
            {!showFinalCall ? (
              <motion.div
                className="preloader-content"
                animate={isFinishing ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Brand Title */}
                <h1 className="preloader-brand">GROWVORA</h1>

                {/* Animated Status Phases */}
                <div className="preloader-status-wrapper">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={phaseIndex}
                      className="preloader-status"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {statusPhases[phaseIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Organic Horizontal Progress Track */}
                <div className="preloader-progress-track">
                  <motion.div
                    className="preloader-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Numerical Ticker */}
                <div className="preloader-meta">
                  <span>GROWTH IN MOTION</span>
                  <span className="ticker-num">{Math.floor(progress)}%</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="preloader-reveal"
                initial={{ scale: 0.8, opacity: 0, letterSpacing: '0.3em' }}
                animate={{ scale: 1, opacity: 1, letterSpacing: '0.05em' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="reveal-text">LET'S GROW<span className="accent-dot">.</span></h2>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
