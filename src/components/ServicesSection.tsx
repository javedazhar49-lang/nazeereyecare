import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, Shield, Check, Eye, ChevronRight, Activity, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data/clinicData';
import { ServiceItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties (13)' },
    { id: 'refractive', label: 'Glasses Removal & ICL (عینک سے نجات)' },
    { id: 'cornea', label: 'Corneal Transplants & CXL (قرنیہ)' },
    { id: 'cataract', label: 'Cataract Phaco (سفید موتیا)' },
    { id: 'glaucoma', label: 'Glaucoma Care (کالا موتیا)' },
    { id: 'retina', label: 'Retina & Emergency (پردہ بصارت)' },
    { id: 'pediatric', label: 'Squint & Pediatric (بھینگا پن)' },
    { id: 'oculoplastic', label: 'DCR & Tear Duct (آنکھ کی نالی)' },
    { id: 'ocular-surface', label: 'Dry Eye Health (خشکی)' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative">
      {/* Visual Ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>13 Specialized Surgical & Medical Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Comprehensive Ophthalmic <span className="blue-gradient-text">Procedures</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From blade-free refractive laser vision correction and certified corneal transplantation to micro-retinal surgery and tear duct restoration. Click any specialty to inspect complete surgical protocols.
          </p>
        </motion.div>

        {/* Filter Tabs - Interactive pill buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Card Image */}
                  <div 
                    className="relative h-52 overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => onSelectService(service)}
                  >
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    
                    {/* Category Pill */}
                    <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/95 text-blue-700 border border-blue-200 shadow-sm">
                      {service.categoryLabel}
                    </span>

                    {/* Urdu Badge if available */}
                    {service.urduTitle && (
                      <span className="absolute top-4 right-4 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20">
                        {service.urduTitle.split('(')[0]}
                      </span>
                    )}

                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/95 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-sky-400" />
                      Click to view full surgical protocol
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 
                        onClick={() => onSelectService(service)}
                        className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {service.title}
                      </h3>
                      {service.urduTitle && (
                        <p className="text-xs text-blue-700 font-semibold mt-1">
                          {service.urduTitle}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.highlights.slice(0, 2).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Procedure Metadata */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        {service.procedureTime.split('for')[0]}
                      </span>
                      <span className="font-semibold text-blue-700">
                        {service.recoveryTime.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Row - Prominent Click Buttons */}
                <div className="p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:border-blue-300"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>Clinical Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600" />
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Clinic</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
