import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Hammer, Info, LayoutGrid } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  onViewDetails: (project: Project) => void;
}

type FilterCategory = 'All' | 'Custom New Builds' | 'Luxury Renovations';

export default function Projects({ onViewDetails }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = ['All', 'Custom New Builds', 'Luxury Renovations'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24" id="projects-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading & Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12" id="projects-header-wrapper">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#134074] font-mono font-bold mb-2 inline-block">The Portfolio</span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight uppercase mb-4 animate-fade-in">
            Luxury Custom Homes & Renovations
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Review detailed case sheets of our primary residential and multi-family structures inside Greater Portland. Click any card to open the architectural specifications, materials, and mechanical details.
          </p>
        </div>

        {/* Filter Selection Button Bar */}
        <div className="flex justify-center mb-12" id="projects-filter-bar">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200/60 shadow-sm flex space-x-2 sm:space-x-4">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest px-4 sm:px-6 py-3 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0b2545] text-white shadow-md shadow-blue-950/25'
                      : 'text-slate-500 hover:text-[#0b2545] hover:bg-slate-50'
                  }`}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid Container with Smooth Transition Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full"
                id={`grid-item-${project.id}`}
              >
                <ProjectCard project={project} onViewDetails={onViewDetails} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Empty State if needed */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm mt-8" id="empty-portfolio-state">
            <LayoutGrid className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="font-sans text-slate-500 font-medium text-sm">No custom builds matching this classification.</p>
          </div>
        )}

        {/* Quick Help Callout Sheet */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-4xl mx-auto shadow-sm" id="projects-spec-hint">
          <div className="bg-[#eef4f8] text-[#134074] p-3 rounded-xl shrink-0">
            <Info className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-sans font-bold text-slate-900 text-sm tracking-tight">Need a customized print spec sheet?</h4>
            <p className="font-sans text-xs text-slate-500 leading-normal">
              Click “View Specifications” on any project card to expand the fully audited checklist, explaining the exact windows, composite materials, soundproofing rating, and structural framing used.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
