import { Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2545] text-white pt-16 pb-8 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10" id="footer-grid-container">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-4" id="footer-col-brand">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')} id="footer-logo">
              <div className="bg-white text-[#0b2545] p-2 rounded-lg" id="footer-logo-box">
                <Hammer className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg tracking-[0.15em] leading-none uppercase">
                  The Leblanc Group
                </span>
                <span className="font-mono text-[8px] tracking-[0.3em] text-[#8da9c4] uppercase mt-0.5">
                  Luxury custom build
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-[#8da9c4] max-w-sm mt-2 leading-relaxed">
              We construct exquisite contemporary residences and undertake custom historic transformations across coastal and southern Maine. Dedicated to premium appliances, ultimate soundproofing, and unmatched structural durability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-8" id="footer-col-links">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#8da9c4]">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2.5">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Owners' },
                { id: 'projects', label: 'Filterable Projects' },
                { id: 'contact', label: 'Get a Consultation' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id as ActiveTab)}
                  className="text-left py-0.5 text-xs font-sans text-slate-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="flex flex-col gap-4" id="footer-col-contact">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#8da9c4]">
              Main Office & Contact
            </h4>
            <div className="flex flex-col space-y-3 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-3" id="footer-address">
                <MapPin className="w-4 h-4 text-[#8da9c4] shrink-0 mt-0.5" />
                <span>547 Riverside Street, Portland, ME 04103</span>
              </div>
              <div className="flex items-center gap-3" id="footer-phone">
                <Phone className="w-4 h-4 text-[#8da9c4] shrink-0" />
                <a href="tel:207-776-0913" className="hover:text-white transition-colors">207-776-0913</a>
              </div>
              <div className="flex items-start gap-3 mt-1" id="footer-emails">
                <Mail className="w-4 h-4 text-[#8da9c4] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@theleblancgroup.com" className="hover:text-white transition-colors text-slate-300">
                    info@theleblancgroup.com
                  </a>
                  <a href="mailto:rleblanc@theleblancgroup.org" className="hover:text-white transition-colors text-slate-300">
                    rleblanc@theleblancgroup.org
                  </a>
                  <a href="mailto:ericker@theleblancgroup.org" className="hover:text-white transition-colors text-slate-300">
                    ericker@theleblancgroup.org
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#8da9c4]" id="footer-bottom-bar">
          <p>© {currentYear} The Leblanc Group LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0" id="footer-fineprint">
            <span>License #ME-82937-C</span>
            <span>Portland, Maine Custom Homes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
