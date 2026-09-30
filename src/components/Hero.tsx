import React from 'react';
import { ShieldCheck, Calendar, ArrowRight, Eye, Award, CheckCircle2, PhoneCall, Sparkles, Activity } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { motion } from 'motion/react';
import laserSuiteImg from '../assets/images/laser_suite_active.png';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
  onOpenSimulator: () => void;
  onOpenDoctors: () => void;
  onOpenLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAppointment, 
  onExploreServices, 
  onOpenSimulator,
  onOpenDoctors,
  onOpenLocation
}) => {
  return (
    <section className="relative min-h-[90vh] pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Ambient Optical Background Lighting with gentle breathing motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-400/20 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.08, 1], x: [0, 15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-sky-300/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.12, 1], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-indigo-200/25 rounded-full blur-[130px]"
        />
        
        {/* Optical Lens Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-blue-500/[0.07] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-sky-500/[0.08] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-blue-600/[0.06] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Clinical Excellence & Actionable Content */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Accreditation Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span className="text-xs uppercase tracking-widest text-blue-900 font-bold">
                PMC Certified Tertiary Ophthalmic Center
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]"
              >
                Restoring <span className="blue-gradient-text">Precision Sight</span> with World-Class Eye Care.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
              >
                Welcome to <strong className="text-slate-900 font-semibold">Nazeer Eye Care</strong> at Lions Medical Complex, Gulberg II. Leading ophthalmic surgery with over 30 years of corneal transplant heritage, <strong className="text-blue-700 font-semibold">swiss Amaris 750 Hz lasers and ICL</strong>, and stitchless micro-incision cataract surgery.
              </motion.p>
            </div>

            {/* Interactive Feature Pills - All clickable converting to information section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <button 
                onClick={onExploreServices}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/70 px-3.5 py-2.5 rounded-xl shadow-sm transition-all text-left cursor-pointer group hover:-translate-y-0.5"
                title="View Blade-Free Femto LASIK Information"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Blade-Free Femto LASIK</span>
              </button>
              <button 
                onClick={onExploreServices}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/70 px-3.5 py-2.5 rounded-xl shadow-sm transition-all text-left cursor-pointer group hover:-translate-y-0.5"
                title="View Vitreo-Retinal Information"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>25G Sutureless Retina</span>
              </button>
              <button 
                onClick={onExploreServices}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/70 px-3.5 py-2.5 rounded-xl shadow-sm transition-all text-left cursor-pointer group col-span-2 sm:col-span-1 hover:-translate-y-0.5"
                title="View Cataract & Lens Information"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Premium Trifocal IOLs</span>
              </button>
            </motion.div>

            {/* CTA Group - Active Buttons converting to Information and Booking */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenAppointment}
                className="group px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-400 text-blue-800 font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                Explore Treatments
              </button>

              <button
                onClick={onOpenSimulator}
                className="px-5 py-3.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                Vision Simulator
              </button>
            </motion.div>

            {/* Quick Facility Trust Ticker with Active navigation triggers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500"
            >
              <button 
                onClick={onOpenDoctors}
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors cursor-pointer font-medium"
              >
                <Award className="w-4 h-4 text-blue-600" />
                <span>PMC Registered Consultant</span>
              </button>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active OR Suites Ready</span>
              </div>
              <button 
                onClick={onOpenLocation}
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors cursor-pointer font-medium"
              >
                <Activity className="w-4 h-4 text-blue-600" />
                <span>Main Market, Gulberg II</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: High Quality Visual Showcase & Live Diagnostic Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 border border-slate-200 bg-white p-3 sm:p-4 group">
              {/* Premium Hospital Surgical Image - Enlarged for full visual fidelity */}
              <div className="relative rounded-2xl overflow-hidden h-[440px] sm:h-[520px] lg:h-[560px] xl:h-[600px] bg-slate-900">
                <img
                  src={laserSuiteImg}
                  alt="Ophthalmic surgical team using high-precision surgical microscope during operation in active laser suite - Nazeer Eye Care"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>

                {/* Overlaid Live Surgical Stat Badge */}
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg z-10"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-800">Laser Suite Active</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Schwind 750 Hz Ready</span>
                </motion.div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xl text-slate-800 z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block">
                        Nazeer Eye Care Facility
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        Modular Micro-Surgical & Laser Suites
                      </h4>
                    </div>
                    <button
                      onClick={onOpenAppointment}
                      className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-sm shrink-0"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Metrics Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-slate-200 p-4 shadow-xl shadow-blue-900/10 hidden sm:flex items-center gap-4 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">31k</div>
                <div className="text-xs text-slate-500 font-medium">Successful Surgeries</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              onClick={onExploreServices}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
