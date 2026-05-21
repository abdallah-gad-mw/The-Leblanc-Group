import { MapPin, Phone, Mail, Clock, CalendarDays, ClipboardCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Intro header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="contact-header-wrapper">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#134074] font-mono font-bold mb-2 inline-block">Consultation & Bidding</span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight uppercase mb-4">
            Connect With The Builders
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Discuss your upcoming residential new building plot or commercial condominium development. We offer professional project estimation, architectural coordination, and secure contract specifications.
          </p>
        </div>

        {/* Balanced 2-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto" id="contact-content-grid">
          
          {/* Left Column: Interactive Contact Form (Span 7) */}
          <div className="lg:col-span-7 h-full" id="contact-form-col">
            <ContactForm />
          </div>

          {/* Right Column: Company Contact Info (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full" id="contact-info-col">
            
            {/* Direct Contact Channels Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 sm:p-8 flex flex-col gap-6" id="contact-channels-card">
              <h3 className="font-sans font-bold text-lg text-slate-900 tracking-tight border-b border-slate-100 pb-3 uppercase">
                The Office & Builders
              </h3>

              <div className="flex flex-col space-y-5" id="channels-list">
                
                {/* Office Location */}
                <div className="flex items-start gap-4" id="card-channel-addr">
                  <div className="bg-[#eef4f8] text-[#134074] p-3 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col gap-1 font-sans">
                    <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Headquarters</span>
                    <span className="text-sm text-slate-800 font-semibold leading-relaxed">
                      547 Riverside Street, <br />Portland, ME 04103
                    </span>
                  </div>
                </div>

                {/* Main Telephone */}
                <div className="flex items-start gap-4" id="card-channel-phone">
                  <div className="bg-[#eef4f8] text-[#134074] p-3 rounded-xl shrink-0">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col gap-1 font-sans">
                    <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Main Phone</span>
                    <a 
                      href="tel:207-776-0913" 
                      className="text-sm text-[#0b2545] font-bold hover:text-[#134074] transition-colors leading-relaxed"
                    >
                      207-776-0913
                    </a>
                  </div>
                </div>

                {/* Multiple Emails */}
                <div className="flex items-start gap-4" id="card-channel-emails">
                  <div className="bg-[#eef4f8] text-[#134074] p-3 rounded-xl shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col gap-1 font-sans">
                    <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Email Addresses</span>
                    <div className="flex flex-col space-y-1.5 pt-0.5">
                      <a href="mailto:info@theleblancgroup.com" className="text-xs text-[#134074] font-medium hover:underline">
                        info@theleblancgroup.com <span className="text-slate-400 font-normal">(Inquiries)</span>
                      </a>
                      <a href="mailto:rleblanc@theleblancgroup.org" className="text-xs text-[#134074] font-medium hover:underline">
                        rleblanc@theleblancgroup.org <span className="text-slate-400 font-normal">(Bob Leblanc)</span>
                      </a>
                      <a href="mailto:ericker@theleblancgroup.org" className="text-xs text-[#134074] font-medium hover:underline">
                        ericker@theleblancgroup.org <span className="text-slate-400 font-normal">(Ed Ricker)</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Detail Card */}
            <div className="bg-[#0b2545] text-white rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-md" id="contact-hours-card">
              <h4 className="font-sans font-semibold text-xs text-[#8da9c4] tracking-widest uppercase">Office Operating Hours</h4>
              <div className="flex flex-col gap-3 font-sans text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">7:00 AM - 5:00 PM EST</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">8:00 AM - 1:00 PM EST</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span className="font-semibold text-[#8da9c4]">Closed</span>
                </div>
              </div>
              <p className="font-sans text-[11px] text-[#8da9c4] mt-2 leading-relaxed">
                * Our active job site hours may vary based on weather and concrete setting constraints. For on-site inspections, please book a time slot in advance.
              </p>
            </div>

            {/* Quick credentials audit card */}
            <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-5 flex gap-3 text-slate-500 text-xs font-sans align-middle items-center" id="contact-fineprint-card">
              <ClipboardCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Registered luxury builder in Maine. Custom plans comply fully with IBC core and local building fire-safeguards.</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
