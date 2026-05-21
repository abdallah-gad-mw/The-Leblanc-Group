import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectModal from './components/ProjectModal';
import { ActiveTab, Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync state with URL hash for a premium client-side routing experience
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActiveTab;
      if (['home', 'about', 'projects', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Run on initial page load
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            onNavigate={handleSetActiveTab} 
            onViewDetails={setSelectedProject} 
          />
        );
      case 'about':
        return <About onNavigate={handleSetActiveTab} />;
      case 'projects':
        return <Projects onViewDetails={setSelectedProject} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            onNavigate={handleSetActiveTab} 
            onViewDetails={setSelectedProject} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-[#134074] selection:text-white" id="root-app-layout">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      {/* 2. Main Area with high-quality route transition animations */}
      <main className="flex-grow" id="app-main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="w-full"
            id={`page-wrapper-${activeTab}`}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Project Gallery/Lightbox specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* 4. Luxury Brand Footer */}
      <Footer setActiveTab={handleSetActiveTab} />

    </div>
  );
}
