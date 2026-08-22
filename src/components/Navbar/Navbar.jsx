import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Instagram Management', path: '/instagram-management' },
    { name: 'Web Services', path: '/web-development' },
    { name: 'Graphic Designing', path: '/graphic-designing' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="GrowVora Logo" />
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <Button to="/contact" variant="primary">Let's Talk</Button>
          </div>

          <div className="mobile-actions">
            <button className="theme-toggle-btn mobile-theme-btn" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button className="hamburger" onClick={() => setIsOpen(true)} aria-label="Menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Moved outside header to fix backdrop-filter stacking context bug on mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <FiX />
              </button>
              <nav className="mobile-links">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <Button to="/contact" variant="primary" onClick={() => setIsOpen(false)}>
                Let's Talk
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
