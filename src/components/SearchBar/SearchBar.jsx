import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/faq';
import { team } from '../../data/team';
import { services } from '../../data/services';
import './SearchBar.scss';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (val.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = val.toLowerCase();
    const newResults = [];

    // Search FAQs
    faqs.forEach((faq) => {
      if (faq.question.toLowerCase().includes(lowerQuery) || faq.answer.toLowerCase().includes(lowerQuery)) {
        newResults.push({ type: 'FAQ', title: faq.question, path: '/contact', desc: faq.answer.substring(0, 60) + '...' });
      }
    });

    // Search Services
    services.forEach((service) => {
      if (service.title.toLowerCase().includes(lowerQuery) || service.description.toLowerCase().includes(lowerQuery)) {
        newResults.push({ type: 'Service', title: service.title, path: service.path, desc: service.description.substring(0, 60) + '...' });
      }
    });

    // Search Team
    team.forEach((member) => {
      if (member.name.toLowerCase().includes(lowerQuery) || member.role.toLowerCase().includes(lowerQuery)) {
        newResults.push({ type: 'Team', title: member.name, path: '/team', desc: member.role });
      }
    });

    setResults(newResults);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const navigateToResult = (path) => {
    navigate(path);
    closeSearch();
  };

  return (
    <div className="search-bar-container">
      <button className="search-trigger-btn" onClick={() => setIsOpen(true)} aria-label="Search">
        <FiSearch />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="search-overlay-bg" onClick={closeSearch} />
            
            <motion.div
              className="search-modal"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="search-input-wrapper">
                <FiSearch className="search-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search FAQs, services, team..."
                  value={query}
                  onChange={handleSearch}
                />
                {query && (
                  <button className="clear-btn" onClick={clearSearch}>
                    <FiX />
                  </button>
                )}
                <button className="close-btn" onClick={closeSearch}>
                  ESC
                </button>
              </div>

              {query.trim().length >= 2 && (
                <div className="search-results">
                  {results.length > 0 ? (
                    results.map((result, idx) => (
                      <div key={idx} className="search-result-item" onClick={() => navigateToResult(result.path)}>
                        <span className="result-type">{result.type}</span>
                        <div className="result-content">
                          <h4>{result.title}</h4>
                          <p>{result.desc}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">
                      <p>No results found for "{query}"</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
