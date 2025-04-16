import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProjectTimeline } from './components/ProjectTimeline';
import { SkillsVenn } from './components/SkillsVenn';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectDetails } from './components/ProjectDetails';
import { Navigation } from './components/Navigation';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProjectTimeline />
              <SkillsVenn />
            </>
          } />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;