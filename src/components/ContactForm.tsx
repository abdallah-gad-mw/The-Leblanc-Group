import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, ArrowRight, Loader2, Phone, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick client-side validations
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMsg('Please specify an email or a telephone number for contact.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your design brief or inquiry message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate an API submit to complete user intent without breaking container
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Log form submission in standard secure fashion
      console.log('Premium contact inquiry submitted safely:', formData);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center" id="contact-form-card">
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b2545] to-[#134074]" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="contact-form-entry"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            id="form-entry-wrapper"
          >
            <div className="flex flex-col mb-8" id="form-header">
              <span className="text-[10px] uppercase tracking-widest text-[#134074] font-mono font-bold mb-1">Inquire Online</span>
              <h3 className="font-sans font-bold text-2xl text-slate-900 tracking-tight">
                Let’s Discuss Your Build
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-2">
                Fill out the secure form below. Bob Leblanc or Ed Ricker will contact you directly within 24 business hours to sit down over your blueprint.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4" id="home-build-contact-form">
              {/* Name field */}
              <div className="flex flex-col gap-1.5" id="form-group-name">
                <label htmlFor="form-name" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Full Name <span className="text-[#134074]">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Stephen King"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#134074] focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-lg outline-none transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Two column email & phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-row-contact">
                {/* Telephone Number */}
                <div className="flex flex-col gap-1.5" id="form-group-phone">
                  <label htmlFor="form-phone" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 207-555-0192"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#134074] focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-lg outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5" id="form-group-email">
                  <label htmlFor="form-email" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Email Address <span className="text-[#134074]">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. stephen@maine.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#134074] focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-lg outline-none transition-all placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Message Block */}
              <div className="flex flex-col gap-1.5" id="form-group-message">
                <label htmlFor="form-message" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Inquiry Details <span className="text-[#134074]">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your custom project lot, size target, timeline, or restoration specifications..."
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#134074] focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-lg outline-none transition-all placeholder:text-slate-400 resize-none"
                  required
                />
              </div>

              {/* Error readout if fails */}
              {errorMsg && (
                <p className="text-red-600 font-sans text-xs font-medium" id="form-error-readout">
                  {errorMsg}
                </p>
              )}

              {/* Submit Trigger button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0b2545] text-white hover:bg-[#134074] disabled:bg-slate-300 disabled:cursor-not-allowed font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                id="form-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Build Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="contact-form-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center py-6 flex flex-col items-center gap-6"
            id="form-success-wrapper"
          >
            <div className="bg-[#eef4f8] text-[#134074] p-4 rounded-full shadow-inner shadow-blue-900/10" id="success-icon-box">
              <CheckCircle className="w-12 h-12 stroke-[1.5]" />
            </div>

            <div className="flex flex-col gap-2" id="success-text-block">
              <h3 className="font-sans font-bold text-2xl text-slate-900 tracking-tight">
                Brief Received Successfully
              </h3>
              <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your luxury custom blueprint request is safely logged. 
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200 max-w-sm mx-auto text-left flex flex-col gap-2 mt-4 font-sans text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-1.5 text-slate-500 font-mono text-[10px] uppercase">
                  <span>Logged Details</span>
                  <span className="text-green-600">Pending Secure Audit</span>
                </div>
                <p className="text-slate-600"><strong className="text-slate-800">Email:</strong> {formData.email}</p>
                {formData.phone && <p className="text-slate-600"><strong className="text-slate-800">Phone:</strong> {formData.phone}</p>}
                <p className="text-slate-600 line-clamp-2"><strong className="text-slate-800">Brief:</strong> "{formData.message}"</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-[#134074] hover:text-[#0b2545] font-sans text-xs underline font-bold cursor-pointer transition-colors"
              id="form-reset-btn"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
