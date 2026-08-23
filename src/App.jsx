import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import InstagramManagement from './pages/InstagramManagement/InstagramManagement';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import GraphicDesigning from './pages/GraphicDesigning/GraphicDesigning';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/instagram-management" element={<InstagramManagement />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/graphic-designing" element={<GraphicDesigning />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
