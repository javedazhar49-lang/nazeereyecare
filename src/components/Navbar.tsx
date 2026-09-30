import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: (doctorId?: string, serviceId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Prof. Dr. Shahid Nazeer', 
      line1: 'Prof. Dr. Shahid', 
      line2: 'Nazeer', 
      href: '#dr-nazeer' 
    },
    { 
      label: 'Specialties', 
      line1: 'Specialties', 
      line2: null, 
      href: '#services' 
    },
    { 
      label: 'Vision Lab', 
      line1: 'Vision', 
      line2: 'Lab', 
      href: '#vision-lab' 
    },
    { 
      label: 'Location & Hours', 
      line1: 'Location &', 
      line2: 'Hours', 
      href: '#location-hours' 
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200/90 shadow-sm">
      {/* ========================================================================= */}
      {/* SINGLE UNIFIED TOPBAR ROW WITH ENLARGED PROMINENT LOGO                    */}
      {/* ========================================================================= */}
      <nav 
        className={`transition-all duration-300 px-3 sm:px-4 md:px-6 lg:px-8 ${
          isScrolled 
            ? 'py-2 sm:py-2.5 shadow-md' 
            : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          
          {/* 1. LEFT: PROMINENTLY ENLARGED LOGO + DIVIDER + TERTIARY INSTITUTE / LIONS MEDICAL COMPLEX */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="#" className="flex items-center group py-0.5">
              <img 
                src="/logo.png" 
                alt="Nazeer Eye Care - Clearer Vision, Brighter Tomorrows" 
                className="h-[68px] sm:h-[82px] md:h-[95px] lg:h-[108px] xl:h-[120px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] drop-shadow-xs"
              />
            </a>

            {/* Vertical Divider Line */}
            <div className="h-12 sm:h-16 md:h-20 lg:h-24 w-px bg-slate-200 mx-0.5 sm:mx-1"></div>

            {/* Tertiary Institute Badge + Lions Medical Complex Campus */}
            <div className="flex flex-col justify-center">
              <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-bold tracking-wider text-teal-800 bg-teal-50/90 px-2 py-0.5 rounded border border-teal-300 uppercase leading-none text-center w-fit shadow-2xs">
                TERTIARY<br/>INSTITUTE
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] text-slate-700 font-semibold leading-tight mt-1 text-left whitespace-nowrap">
                Lions Medical Complex<br/>Campus
              </span>
            </div>
          </div>

          {/* 2. MIDDLE: NAV POINTS - PROMINENT, BIGGER & CLEAR */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink justify-center">
            {navLinks.map((link) => {
              const isVisionOrLocation = link.label === 'Vision Lab' || link.label === 'Location & Hours';
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-extrabold tracking-tight transition-all leading-tight text-center py-2 sm:py-2.5 cursor-pointer whitespace-nowrap shrink-0 px-2.5 sm:px-3.5 md:px-4 rounded-xl shadow-xs ${
                    isVisionOrLocation
                      ? 'text-blue-700 hover:text-blue-950 bg-blue-50/90 hover:bg-blue-100 border border-blue-200/90 hover:border-blue-300'
                      : 'text-slate-850 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200/70 hover:border-slate-300'
                  }`}
                  title={link.label}
                >
                  {link.line2 ? (
                    <>
                      <span className="block">{link.line1}</span>
                      <span className="block">{link.line2}</span>
                    </>
                  ) : (
                    <span className="block">{link.line1}</span>
                  )}
                </a>
              );
            })}
          </div>

          {/* 3. RIGHT: CALL HELPLINE + BOOK APPOINTMENT */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 shrink-0">
            {/* Call Helpline */}
            <a
              href={`tel:${CLINIC_INFO.mobileEmergency}`}
              className="px-2 sm:px-2.5 md:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5 text-blue-600 shrink-0" />
              <span className="text-[10px] sm:text-[11px] md:text-xs font-bold text-slate-800 leading-tight text-left">
                Call<br/>Helpline
              </span>
            </a>

            {/* BOOK APPOINTMENT Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="px-2.5 sm:px-3.5 md:px-4.5 py-1.5 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-[13px] uppercase tracking-wider shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5 text-white shrink-0" />
              <span className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-black uppercase tracking-wider leading-tight text-left">
                BOOK<br/>APPOINTMENT
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
