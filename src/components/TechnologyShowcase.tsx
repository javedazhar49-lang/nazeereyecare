import React, { useState } from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles, Info, X } from 'lucide-react';
import { TECHNOLOGIES_DATA } from '../data/clinicData';
import { TechnologyItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface TechnologyShowcaseProps {
  onOpenAppointment?: () => void;
}

export const TechnologyShowcase: React.FC<TechnologyShowcaseProps> = ({ onOpenAppointment }) => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(null);

  return (
    <section id="technology" className="py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Cpu className="w-3.5 h-3.5" />
            <span>German & Swiss Surgical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            The Gold Standard in <span className="blue-gradient-text">Ophthalmic Technology</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every procedure at Nazeer Eye Care is performed using benchmark instrumentation engineered for microscopic safety, zero collateral thermal stress, and maximum visual recovery.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNOLOGIES_DATA.map((tech, idx) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-blue-900/10 group"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {tech.badge}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Globe className="w-3 h-3 text-slate-400" />
                        {tech.origin}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold mt-1">
                      Clinical Role: {tech.role}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tech.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                    Key Engineering Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tech.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => setSelectedTech(tech)}
                  className="flex-1 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Technical Specs
                </button>
                {onOpenAppointment && (
                  <button
                    onClick={onOpenAppointment}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer text-center"
                  >
                    Consult Surgeon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Detail Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  {selectedTech.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-2">
                  {selectedTech.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">Origin: {selectedTech.origin} • {selectedTech.role}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedTech.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Clinical Rigor & Capabilities
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedTech.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedTech(null);
                    if (onOpenAppointment) onOpenAppointment();
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Inquire For Treatment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
