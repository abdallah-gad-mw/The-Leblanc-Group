import { motion } from 'motion/react';
import { MapPin, Calendar, Maximize2, Sparkles, Building2, Square } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Determine major icon indicator based on content
  const isCondo = project.specs.size?.toLowerCase().includes('condo') || project.shortDesc.toLowerCase().includes('condo') || project.shortDesc.toLowerCase().includes('unit');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
      id={`project-card-${project.id}`}
    >
      {/* Project Image Overlay with hover scaling */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100" id={`project-img-container-${project.id}`}>
        <img
          src={project.image}
          alt={`Exterior representation of ${project.address}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          id={`project-img-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Category Tag */}
        <span 
          className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-white/95 text-[#0b2545] font-sans font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm"
          id={`project-tag-${project.id}`}
        >
          {project.category === 'Custom New Builds' ? 'New Build' : 'Renovation'}
        </span>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onViewDetails(project)}
            className="bg-white text-[#0b2545] text-xs font-sans font-bold uppercase tracking-widest px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#134074] hover:text-white transition-colors cursor-pointer"
            id={`project-hover-btn-${project.id}`}
          >
            <Maximize2 className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white" id={`project-body-${project.id}`}>
        <div id={`project-info-top-${project.id}`}>
          {/* Address and Location pins */}
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono tracking-wide mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#134074]" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-sans font-bold text-xl text-slate-900 tracking-tight mb-2 group-hover:text-[#134074] transition-colors leading-snug">
            {project.address}
          </h3>

          <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6">
            {project.shortDesc}
          </p>
        </div>

        {/* Specifications quick icons grid */}
        <div className="border-t border-slate-50 pt-5 mt-auto flex flex-col gap-4" id={`project-footer-${project.id}`}>
          <div className="grid grid-cols-2 gap-y-3 gap-x-1" id={`project-icons-grid-${project.id}`}>
            
            {/* Spec 1: Size */}
            {project.specs.size && (
              <div className="flex items-center gap-2 text-slate-600 font-sans text-xs" id={`project-spec-size-${project.id}`}>
                {isCondo ? (
                  <Building2 className="w-4 h-4 text-[#134074] shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-[#134074] shrink-0" />
                )}
                <span className="truncate font-semibold text-slate-700">
                  {project.specs.size.split(' ')[0]} {project.specs.size.split(' ')[1] || 'sq.ft.'}
                </span>
              </div>
            )}

            {/* Spec 2: Timeline */}
            {project.specs.timeline && (
              <div className="flex items-center gap-2 text-slate-600 font-sans text-xs" id={`project-spec-timeline-${project.id}`}>
                <Calendar className="w-4 h-4 text-[#134074] shrink-0" />
                <span className="font-semibold text-slate-700">{project.specs.timeline}</span>
              </div>
            )}

            {/* Spec 3: Beds / Baths if exist */}
            {project.specs.beds && project.specs.baths && (
              <div className="flex items-center gap-2 text-slate-600 font-sans text-xs" id={`project-spec-beds-${project.id}`}>
                <Sparkles className="w-4 h-4 text-[#134074] shrink-0" />
                <span className="font-semibold text-slate-700">
                  {project.specs.beds.split(' ')[0]}B / {project.specs.baths.split(' ')[0]}Ba
                </span>
              </div>
            )}

            {/* Spec 4: Garage if exists */}
            {project.specs.garage && (
              <div className="flex items-center gap-2 text-slate-600 font-sans text-xs" id={`project-spec-garage-${project.id}`}>
                <Sparkles className="w-4 h-4 text-[#134074] shrink-0" />
                <span className="font-semibold text-slate-700 truncate">
                  {project.specs.garage.split(' ')[0]} Parking
                </span>
              </div>
            )}

          </div>

          {/* Action Trigger button */}
          <button
            onClick={() => onViewDetails(project)}
            className="w-full text-center bg-slate-50 border border-slate-100 hover:bg-[#0b2545] hover:text-white hover:border-[#0b2545] text-[#0b2545] text-xs font-sans font-semibold uppercase tracking-widest py-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            id={`project-detail-btn-${project.id}`}
          >
            <span>View Specifications</span>
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
