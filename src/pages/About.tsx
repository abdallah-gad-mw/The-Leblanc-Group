import { motion } from 'motion/react';
import { Hammer, Award, Compass, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { TEAM_DATA } from '../data';
import { ActiveTab } from '../types';

interface AboutProps {
  onNavigate: (tabId: ActiveTab) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24" id="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro header with elegant typography */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="about-intro-header">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#134074] font-mono font-bold mb-2 inline-block">The Leblanc Group</span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight uppercase mb-4">
            Master Craftsmanship & Project Rigor
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Founded with a vision to marry pristine architectural design with uncompromising structural integrity. We construct coastal estates that outlast the harsh elements of Maine and deliver acoustic sanctuary.
          </p>
        </div>

        {/* 2-Column Team Bio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20" id="about-team-grid">
          {TEAM_DATA.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden flex flex-col group h-full hover:shadow-xl transition-all duration-300"
              id={`team-member-card-${member.id}`}
            >
              {/* Profile image with custom overflow */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 grow-0" id={`member-img-frame-${member.id}`}>
                <img
                  src={member.image}
                  alt={`Owner - ${member.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  id={`member-pic-${member.id}`}
                />
                
                {/* Visual Accent */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-6 text-white" id="member-overlay">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-2xl tracking-normal">{member.name}</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8da9c4] font-semibold mt-1">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow" id={`member-desc-${member.id}`}>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6" id={`member-bio-${member.id}`}>
                  {member.bio}
                </p>

                {/* Sub-cred strip and direct channels */}
                <div className="border-t border-slate-50 pt-5 flex items-center justify-between text-[11px] font-sans text-slate-400" id={`member-foot-${member.id}`}>
                  <span className="font-mono tracking-wider">The Leblanc Group LLC • Owner</span>
                  <div className="flex gap-3 text-[#134074]" id={`member-links-${member.id}`}>
                    <a 
                      href={`mailto:${member.id === 'bob-leblanc' ? 'rleblanc@theleblancgroup.org' : 'ericker@theleblancgroup.org'}`}
                      className="p-1.5 bg-[#eef4f8] rounded-full hover:bg-[#0b2545] hover:text-white transition-colors cursor-pointer"
                      title="Direct email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="tel:207-776-0913" 
                      className="p-1.5 bg-[#eef4f8] rounded-full hover:bg-[#0b2545] hover:text-white transition-colors cursor-pointer"
                      title="Call office"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Philosophy Block with clean icons */}
        <div className="bg-[#0b2545] text-white rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-xl relative overflow-hidden" id="about-philosophy-card">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8" id="phil-grid-container">
            
            <div className="lg:col-span-1 flex flex-col justify-center" id="phil-intro">
              <span className="text-[10px] uppercase tracking-widest text-[#8da9c4] font-mono font-bold mb-1">Our Core Value</span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-tight uppercase">
                The Anatomy <br />Of a Luxury <br className="hidden lg:inline" />Home build
              </h3>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8" id="phil-pillars">
              {/* Pillar A */}
              <div className="flex gap-4 items-start" id="phil-p-1">
                <div className="bg-white/10 text-[#8da9c4] p-3 rounded-xl border border-white/10 shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-sans font-semibold text-sm tracking-wider uppercase">Uncompromising Integrity</h4>
                  <p className="font-sans text-xs text-slate-300 leading-normal">
                    We only build with structural firewalls, premium composite sheathing, and high-pitch truss structures. No corners cut, no generic substitutes.
                  </p>
                </div>
              </div>

              {/* Pillar B */}
              <div className="flex gap-4 items-start" id="phil-p-2">
                <div className="bg-white/10 text-[#8da9c4] p-3 rounded-xl border border-white/10 shrink-0 mt-1">
                  <Hammer className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-sans font-semibold text-sm tracking-wider uppercase">Local Crafts Legacy</h4>
                  <p className="font-sans text-xs text-slate-300 leading-normal">
                    Our solid wide white oak boards, granite steps, and architectural archways represent local pride and classic New England style made for modern layouts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner to Projects */}
        <div className="text-center mt-16" id="about-cta-footer">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2.5 bg-[#0b2545] text-white hover:bg-[#134074] px-8 py-3.5 rounded-lg text-xs font-sans font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:shadow-lg"
            id="about-cta-btn"
          >
            <span>Browse our projects portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
