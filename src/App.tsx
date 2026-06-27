import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { ProjectTimeline } from './components/ProjectTimeline';
import { Contact } from './components/Contact';
import { ProjectDetails } from './components/ProjectDetails';
import { Navigation } from './components/Navigation';

function App() {
  // Theme is managed entirely inside Navigation via useTheme hook (sets documentElement class)
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <Skills />
              <ProjectTimeline />
              <Contact />
            </>
          } />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
