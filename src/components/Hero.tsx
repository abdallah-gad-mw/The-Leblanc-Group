import { motion } from 'motion/react';
import { Compass, CalendarDays, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeroProps {
  onNavigate: (tabId: ActiveTab) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden min-h-[85vh] flex items-center" id="hero-section">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-slate-950" id="hero-bg-wrapper">
        <img
          src="/src/assets/images/hero_maine_home_1779365177675.png"
          alt="Premium luxury custom built oceanfront estate in Maine by The Leblanc Group"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-80"
          id="hero-bg-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545]/90 via-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Floating abstract decorative box to highlight modern styling */}
      <div className="absolute top-1/4 right-10 w-96 h-96 border border-white/15 rounded-full pointer-events-none hidden lg:block animate-pulse duration-10000" />
      <div className="absolute top-1/3 right-48 w-48 h-48 border border-white/10 rounded-full pointer-events-none hidden lg:block" />

      {/* Hero Core Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 flex flex-col items-start gap-8" id="hero-content">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider uppercase text-[#c3d5e8]"
          id="hero-badge"
        >
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '20s' }} />
          <span>Premier custom builder • Southern Maine</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl flex flex-col gap-4"
          id="hero-headline-wrapper"
        >
          <h1 className="font-sans font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            Crafting Luxury Custom <br className="hidden sm:inline" />
            Homes & Renovations <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-100 to-white font-extrabold">across Maine</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-300/90 max-w-xl leading-relaxed mt-2">
            Elevating Coastal living through master carpentry, continuous fire-rated structures, and smart electric heat pump mechanics. Your vision of premium architectural engineering, realized.
          </p>
        </motion.div>

        {/* Call to action panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          id="hero-cta-panel"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="bg-white hover:bg-slate-100 text-[#0b2545] text-xs font-sans font-bold uppercase tracking-widest px-8 py-4.5 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0"
            id="hero-btn-projects"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onNavigate('contact')}
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-sans font-bold uppercase tracking-widest px-8 py-4.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:border-white"
            id="hero-btn-contact"
          >
            <span>Get a Quote</span>
          </button>
        </motion.div>

        {/* Small credentials strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 sm:pt-12 border-t border-white/15 w-full max-w-xl"
          id="hero-credentials"
        >
          <div className="flex flex-col" id="cred-1">
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight">8,000+</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Sq.Ft Condominiums</span>
          </div>
          <div className="flex flex-col" id="cred-2">
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight">100%</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Custom Built</span>
          </div>
          <div className="flex flex-col" id="cred-3">
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight">25+</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Years Experience</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
