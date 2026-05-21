import { motion } from 'motion/react';
import { X, Calendar, MapPin, Building2, Square, Sparkles, Check, Clock } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-55 overflow-y-auto" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      id="project-lightbox-backdrop"
    >
      {/* Semi-transparent backdrop with blur */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel containing the gallery and data columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="inline-block align-middle bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full border border-slate-100 max-h-[90vh] md:max-h-[92vh] flex flex-col"
          id={`modal-panel-${project.id}`}
        >
          {/* Header Close Bar */}
          <div className="absolute top-4 right-4 z-10" id="modal-close-wrapper">
            <button
              onClick={onClose}
              className="bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer focus:outline-none"
              aria-label="Close details"
              id="modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Frame (Scrollable to prevent cutoff) */}
          <div className="overflow-y-auto flex-grow" id="modal-scroll-container">
            
            {/* Image Banner */}
            <div className="relative h-64 sm:h-96 w-full bg-slate-900" id="modal-hero-image">
              <img
                src={project.image}
                alt={`Premium detailed photo of ${project.address}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
                id={`modal-img-${project.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/10" />
              
              {/* Lower Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white" id="modal-headline-container">
                <span className="text-[10px] uppercase tracking-[0.25em] bg-[#134074] text-white font-sans font-bold px-3 py-1.5 rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h2 className="font-sans font-bold text-2xl sm:text-4xl text-white tracking-tight mb-2 leading-tight">
                  {project.address}
                </h2>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#8da9c4]" />
                    <span>{project.location}</span>
                  </div>
                  {project.specs.timeline && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#8da9c4]" />
                      <span>{project.specs.timeline} Build Time</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="p-6 sm:p-8" id="modal-data-body">
              
              {/* Core numbers strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-8" id="modal-spec-strip">
                
                {project.specs.size && (
                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Total Area</span>
                    <span className="font-sans font-semibold text-sm text-slate-800 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#134074]" />
                      {project.specs.size.split(' ')[0]} {project.specs.size.split(' ')[1] || 'sq.ft.'}
                    </span>
                  </div>
                )}

                {project.specs.timeline && (
                  <div className="flex flex-col gap-1 items-start border-l border-slate-200/60 pl-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Timeline</span>
                    <span className="font-sans font-semibold text-sm text-slate-800 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#134074]" />
                      {project.specs.timeline}
                    </span>
                  </div>
                )}

                {project.specs.beds && (
                  <div className="flex flex-col gap-1 items-start border-l border-slate-200/60 pl-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Configuration</span>
                    <span className="font-sans font-semibold text-sm text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#134074]" />
                      {project.specs.beds.split(' ')[0]} Beds / {project.specs.baths?.split(' ')[0]} Baths
                    </span>
                  </div>
                )}

                {project.specs.garage && (
                  <div className="flex flex-col gap-1 items-start border-l border-slate-200/60 pl-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Parking</span>
                    <span className="font-sans font-semibold text-sm text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#134074]" />
                      {project.specs.garage}
                    </span>
                  </div>
                )}
              </div>

              {/* Sub-description */}
              <div className="mb-8" id="modal-long-description">
                <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-[#134074] mb-2">
                  Project Overview
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.shortDesc} Built and finished according to the rigid structural standards of The Leblanc Group LLC, this address combines weather-resistant cladding with high-efficiency energy loops.
                </p>
              </div>

              {/* Comprehensive Features Specification Checklist */}
              <div id="modal-full-specifications">
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-[#0b2545] border-b border-slate-100 pb-3 mb-4">
                  Full Technical Specifications & Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-6" id="features-specs-checklist">
                  {project.specs.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 bg-[#eef4f8]/30 hover:bg-[#eef4f8]/60 p-3 rounded-lg border border-[#eef4f8]/50 transition-colors"
                      id={`feature-${project.id}-${idx}`}
                    >
                      <div className="bg-[#134074]/10 text-[#134074] rounded-full p-1 mt-0.5 shrink-0" id={`feature-check-icon-${idx}`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs text-slate-700 leading-normal font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sticky Modal Footer Action Button */}
          <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-t border-slate-100 shrink-0" id="modal-footer-bar">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              The Leblanc Group • Maine Building License #ME-82937-C
            </span>
            <button
              onClick={onClose}
              className="bg-[#0b2545] text-white font-sans text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-lg hover:bg-[#134074] transition-colors cursor-pointer"
              id="modal-footer-close-btn"
            >
              Close Spec Sheet
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
