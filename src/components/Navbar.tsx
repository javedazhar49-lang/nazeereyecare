import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Home, User, Stethoscope, Eye, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: (doctorId?: string, serviceId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current active section based on scroll position
      const sections = ['contact-us', 'vision-lab', 'services', 'about-us', 'home'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Home', 
      href: '#home',
      id: 'home',
      icon: Home
    },
    { 
      label: 'About Us', 
      href: '#about-us',
      id: 'about-us',
      icon: User
    },
    { 
      label: 'Services', 
      href: '#services',
      id: 'services',
      icon: Stethoscope
    },
    { 
      label: 'Vision Lab', 
      href: '#vision-lab',
      id: 'vision-lab',
      icon: Eye
    },
    { 
      label: 'Contact Us', 
      href: '#contact-us',
      id: 'contact-us',
      icon: MapPin
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <nav 
        className={`transition-all duration-300 px-3 sm:px-4 md:px-6 lg:px-8 ${
          isScrolled 
            ? 'py-2 sm:py-2.5 shadow-md' 
            : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* 1. LEFT: LOGO + TERTIARY INSTITUTE BADGE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center group py-0.5"
            >
              <img 
                src="/logo.png" 
                alt="Nazeer Eye Care - Clearer Vision, Brighter Tomorrows" 
                className="h-[55px] sm:h-[65px] md:h-[75px] lg:h-[84px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] drop-shadow-xs"
              />
            </a>

            {/* Vertical Divider */}
            <div className="h-10 sm:h-12 md:h-14 w-px bg-slate-200 hidden sm:block mx-0.5"></div>

            {/* Tertiary Institute Badge */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-300 uppercase leading-none text-center w-fit shadow-2xs">
                TERTIARY INSTITUTE
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-600 font-semibold leading-tight mt-1 whitespace-nowrap">
                Lions Medical Complex
              </span>
            </div>
          </div>

          {/* 2. MIDDLE: DESKTOP NAV LINKS (Home, About Us, Services, Vision Lab, Contact Us) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-[15px] font-bold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* 3. RIGHT: CALL HELPLINE + BOOK APPOINTMENT + MOBILE TOGGLE */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 shrink-0">
            {/* Call Helpline */}
            <a
              href={`tel:${CLINIC_INFO.mobileEmergency}`}
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
              title={`Call: ${CLINIC_INFO.mobileEmergency}`}
            >
              <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-600 shrink-0" />
              <div className="text-left hidden sm:block">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 block leading-tight">
                  Call Helpline
                </span>
                <span className="text-[9.5px] text-slate-500 block leading-none font-mono">
                  {CLINIC_INFO.mobileEmergency}
                </span>
              </div>
              <span className="sm:hidden text-xs font-bold text-slate-800">Call</span>
            </a>

            {/* Book Appointment Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-[13px] uppercase tracking-wider shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white shrink-0" />
              <span className="font-extrabold tracking-wide">
                Book Appointment
              </span>
            </button>

            {/* Mobile Menu Hamburger Button (visible on < lg screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-800" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN (for screens < 1024px) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 pb-2 space-y-1 bg-white rounded-2xl p-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC_INFO.mobileEmergency}`}
                className="flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Helpline: {CLINIC_INFO.mobileEmergency}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
