import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hammer } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="bg-[#0b2545] text-white p-2.5 rounded-lg transition-transform group-hover:scale-105 shadow-md shadow-blue-900/15" id="nav-logo-icon">
              <Hammer className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col" id="nav-logo-text-wrapper">
              <span className="font-sans font-bold text-xl tracking-[0.15em] text-[#0b2545] leading-none uppercase">
                The Leblanc Group
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#134074] uppercase mt-0.5 font-medium">
                Luxury custom build • maine
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8" id="nav-desktop-links">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-sans tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-[#0b2545] font-semibold' : 'text-slate-500 hover:text-[#0b2545]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#134074]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#0b2545] text-white font-sans text-xs uppercase tracking-widest px-5 py-3 rounded-md hover:bg-[#134074] transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              id="nav-cta-quote"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden" id="nav-mobile-trigger-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0b2545] p-2 rounded-md focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="nav-mobile-hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            id="nav-mobile-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-mobile-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-sans tracking-wider uppercase transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#eef4f8] text-[#0b2545] font-semibold border-l-4 border-[#134074]' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-[#0b2545]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-center bg-[#0b2545] text-white font-sans text-sm uppercase tracking-wider py-3.5 rounded-lg hover:bg-[#134074] transition-colors cursor-pointer"
                  id="nav-mobile-cta"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
