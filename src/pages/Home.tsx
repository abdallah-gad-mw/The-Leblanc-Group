import { motion } from 'motion/react';
import { Home as HomeIcon, Award, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Project, ActiveTab } from '../types';
import { PROJECTS_DATA } from '../data';

interface HomeProps {
  onNavigate: (tabId: ActiveTab) => void;
  onViewDetails: (project: Project) => void;
}

export default function Home({ onNavigate, onViewDetails }: HomeProps) {
  // Extract the specific 3 featured projects required by the user:
  // 72 Munjoy St, 24 Daybreak Lane, and 25 Penrith St
  const featuredIds = ['72-munjoy-st', '24-daybreak-ln', '25-penrith-st'];
  const featuredProjects = PROJECTS_DATA.filter((p) => featuredIds.includes(p.id));

  // If order matters, sort them to align with the list
  const orderedFeatured = [
    featuredProjects.find(p => p.id === '72-munjoy-st'),
    featuredProjects.find(p => p.id === '24-daybreak-ln'),
    featuredProjects.find(p => p.id === '25-penrith-st'),
  ].filter(Boolean) as Project[];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50" id="home-page">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Premium About Brief / Pillars */}
      <section className="py-20 bg-white" id="home-about-brief-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="home-about-grid">
            
            {/* Left Column: Mission Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
              id="home-about-brief-left"
            >
              <div className="flex flex-col" id="brief-header">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#134074] font-mono font-bold mb-1">Our Commitment</span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
                  Engineered For Excellence. Crafted For Luxury.
                </h2>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                The Leblanc Group is southern Maine’s premier builder of luxury residences and multi-family condominium homes. Driven by the hands-on mastery of Bob Leblanc and the rigorous coordination of Ed Ricker, we believe that an architectural blueprint demands absolute structural integrity.
              </p>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                From the foundation to the customized molding, we utilize state-of-the-art materials like premium LP SmartSide, insulated Azek casings, and advanced 3-tiered acoustic barrier boards inside walls to construct living spaces built for generations of quiet coastal comfort.
              </p>
              <div className="pt-2" id="about-brief-cta">
                <button
                  onClick={() => onNavigate('about')}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-[#0b2545] hover:text-[#134074] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Learn about our owners</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Key Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              id="home-about-brief-right"
            >
              
              {/* Pillar 1: Craftsmanship */}
              <div className="bg-[#eef4f8]/30 p-6 rounded-xl border border-[#eef4f8]/70 flex flex-col gap-3" id="pillar-craft">
                <div className="bg-white text-[#134074] p-3 rounded-lg shadow-sm w-fit" id="pillar-icon-craft">
                  <Award className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 tracking-tight">Custom Craftsmanship</h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Bespoke hand-crafted maple cabinetry, custom tile bathroom structures, and choice 5” white oak flooring fitted by master carpenters.
                </p>
              </div>

              {/* Pillar 2: Premium Appliances */}
              <div className="bg-[#eef4f8]/30 p-6 rounded-xl border border-[#eef4f8]/70 flex flex-col gap-3" id="pillar-appliances">
                <div className="bg-white text-[#134074] p-3 rounded-lg shadow-sm w-fit" id="pillar-icon-appliances">
                  <Cpu className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 tracking-tight">Premium Appliances</h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Integrated high-end commercial chef suites and energy-smart heat pump hot water heaters optimized for efficiency.
                </p>
              </div>

              {/* Pillar 3: Structural Excellence */}
              <div className="bg-[#eef4f8]/30 p-6 rounded-xl border border-[#eef4f8]/70 flex flex-col gap-3" id="pillar-structural">
                <div className="bg-white text-[#134074] p-3 rounded-lg shadow-sm w-fit" id="pillar-icon-structural">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 tracking-tight">Structural Excellence</h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Continuous masonry firewalls, heavy timber frame re-assembly, and pre-engineered Atlas flooring and roof trusses.
                </p>
              </div>

              {/* Pillar 4: Quiet Comfort */}
              <div className="bg-[#eef4f8]/30 p-6 rounded-xl border border-[#eef4f8]/70 flex flex-col gap-3" id="pillar-soundproof">
                <div className="bg-white text-[#134074] p-3 rounded-lg shadow-sm w-fit" id="pillar-icon-soundproof">
                  <HomeIcon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 tracking-tight">Triple Acoustic Layering</h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Advanced 3-tiered structural dampening system built inside floor bays and walls to offer serene, silent living quarters.
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="py-20 border-t border-slate-100 bg-slate-50" id="home-featured-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Showcase header details */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12" id="featured-header-row">
            <div className="flex flex-col" id="featured-heading-wrapper">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#134074] font-mono font-bold mb-1">Portfolio Highlights</span>
              <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight uppercase">Featured Projects</h2>
              <p className="font-sans text-xs text-slate-500 mt-2 max-w-md">
                Explore a fine preview of our top builds and complete historical architectural projects across Portland and Cumberland.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="mt-4 sm:mt-0 bg-[#0b2545] text-white font-sans text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg hover:bg-[#134074] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              id="featured-view-all-btn"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3-card Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="featured-projects-cards-grid">
            {orderedFeatured.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} onViewDetails={onViewDetails} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Luxury Direct Callout Banner */}
      <section className="bg-[#0b2545] text-white py-16 text-center relative overflow-hidden" id="home-quote-banner">
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/40 via-transparent to-transparent opacity-5" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-tight uppercase mb-4">
            Ready to design your custom Maine estate?
          </h3>
          <p className="font-sans text-xs text-[#8da9c4] max-w-md mx-auto leading-relaxed mb-8">
            Let us partner with you to transform high-end blueprints into structurally sound, fully insulated living platforms.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-white text-[#0b2545] hover:bg-slate-100 text-xs font-sans font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg cursor-pointer transition-transform hover:-translate-y-0.5"
            id="banner-contact-btn"
          >
            Get a Quote & Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
