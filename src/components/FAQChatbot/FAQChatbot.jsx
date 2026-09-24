import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiMinimize2 } from 'react-icons/fi';
import { faqs } from '../../data/faq';
import './FAQChatbot.scss';

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi there! I am the GrowVora assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text) => {
    const userText = text || inputValue.trim();
    if (!userText) return;

    // Add user message
    const newUserMsg = { id: Date.now(), type: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate bot typing and answering
    setTimeout(() => {
      const answer = findAnswer(userText);
      const newBotMsg = { id: Date.now() + 1, type: 'bot', text: answer };
      setMessages(prev => [...prev, newBotMsg]);
    }, 600);
  };

  const findAnswer = (query) => {
    const q = query.toLowerCase();
    
    // Find best match in FAQ
    for (const faq of faqs) {
      if (
        faq.question.toLowerCase().includes(q) || 
        q.includes(faq.question.toLowerCase()) ||
        // some basic keyword matching
        (q.includes('service') && faq.question.includes('services')) ||
        (q.includes('instagram') && faq.question.includes('Instagram')) ||
        (q.includes('web') && faq.question.includes('websites')) ||
        (q.includes('design') && faq.question.includes('branding')) ||
        (q.includes('start') && faq.question.includes('start a project'))
      ) {
        return faq.answer;
      }
    }
    
    return "I couldn't find an exact answer for that. Please visit our Contact page or email us at novamanagement819@gmail.com for more detailed assistance.";
  };

  const suggestedQuestions = [
    "What services do you provide?",
    "How do you help with Instagram Management?",
    "What kind of websites do you build?",
    "How can I start a project with GrowVora?"
  ];

  return (
    <div className="faq-chatbot-wrapper">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="chatbot-trigger-btn"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMessageSquare className="chat-icon" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chatbot-header">
              <div className="header-left">
                <div className="bot-avatar">
                  <img src="https://cdn.corenexis.com/f/pzO06agieXb.png" alt="GrowVora Bot" />
                </div>
                <div className="header-text">
                  <h4>GrowVora Assistant</h4>
                  <span>Online</span>
                </div>
              </div>
              <div className="header-actions">
                <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
                  <FiX />
                </button>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map(msg => (
                <div key={msg.id} className={`message-bubble ${msg.type}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length < 3 && (
              <div className="suggested-questions">
                <p>Suggested questions:</p>
                <div className="chips">
                  {suggestedQuestions.map((q, i) => (
                    <button key={i} onClick={() => handleSend(q)} className="chip-btn">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="chatbot-input-area">
              <input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                className="send-btn" 
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQChatbot;
