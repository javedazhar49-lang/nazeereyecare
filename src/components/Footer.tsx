import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Pakistan Medical Commission (PMC) certified eye hospital and pioneer corneal transplant center at Lions Medical Complex, Gulberg II, Lahore. Specializing in corneal grafting, micro-incision cataract, German excimer laser vision correction, and retinal surgery.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-[11px] text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>PMC Registered Ophthalmic Facility</span>
              </div>
            </div>
          </div>

          {/* Clinical Departments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Specialized Divisions
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources & Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Patient Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#dr-nazeer" onClick={(e) => handleNavClick(e, '#dr-nazeer')} className="hover:text-blue-400 transition-colors cursor-pointer text-blue-300 font-semibold">Prof. Dr. Shahid Nazeer</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors cursor-pointer">13 Eye Specialties</a></li>
              <li><a href="#vision-simulator" onClick={(e) => handleNavClick(e, '#vision-simulator')} className="hover:text-blue-400 transition-colors cursor-pointer">Vision Simulator</a></li>
              <li><a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-blue-400 transition-colors cursor-pointer">Campus & Directions</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Contact & Emergency
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.shortAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phones[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 2:00 PM (OPD)</span>
              </p>
              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={CLINIC_INFO.websiteUrl}
                  className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>🌐 Official Portal: {CLINIC_INFO.domain}</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>📍 View on Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Nazeer Eye Care Hospital. All clinical procedures PMC verified.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Surgical Protocols</a>
            <a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-white transition-colors cursor-pointer">Emergency Desk</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
