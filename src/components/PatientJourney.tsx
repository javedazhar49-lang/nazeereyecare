import React from 'react';
import { ClipboardCheck, Sparkles, Stethoscope, HeartHandshake, Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clinicData';
import { motion } from 'motion/react';

interface PatientJourneyProps {
  onOpenAppointment?: () => void;
  onExploreServices?: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenAppointment, onExploreServices }) => {
  const steps = [
    {
      step: '01',
      title: '120-Point Diagnostic Workup',
      desc: 'Corneal Scheimpflug tomography, Swept-Source OCT of the retina, specular endothelial cell count, and automated pupil tracking.',
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: 'Custom Wavefront Mapping',
      desc: 'Direct consultation with your designated sub-specialist surgeon. Sub-micron ray tracing tailored strictly to your individual ocular anatomy.',
      icon: Stethoscope,
    },
    {
      step: '03',
      title: 'Precision Micro-Surgery',
      desc: 'Performed in laminar-flow, HEPA-filtered sterile surgical theaters under gentle topical numbing drops with zero pain and no stitches.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Next-Day Acuity & Follow-Up',
      desc: 'Walk out on the same day. Comprehensive morning-after slit lamp review, transparent recovery instructions, and 24/7 surgical hotline access.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="journey" className="py-28 bg-white relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Private Patient Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Your Clinical Pathway to <span className="blue-gradient-text">Restored Sight</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From your very first slit-lamp examination to your final post-operative milestone, our protocol is designed around absolute diagnostic rigor, comfort, and uncompromising clinical safety.
          </p>
        </motion.div>

        {/* 4 Step Timeline Cards - All Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                onClick={onExploreServices}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between transition-colors duration-300 group shadow-sm hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-blue-600">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] font-semibold text-blue-700 flex items-center gap-1">
                  <span>View clinical protocol</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Outcomes Testimonials Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Real Surgical Outcomes
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Patient Stories & Verified Visual Acuity
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Patient Quote */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Outcome Badge */}
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-2 text-xs font-semibold text-blue-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Clinical Outcome: {t.outcome}</span>
                </div>
              </div>

              {/* Patient Meta */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.patientName}</h4>
                  <span className="text-xs text-slate-500 block">{t.profession}, Age {t.age}</span>
                  <span className="text-[11px] text-blue-700 font-medium block mt-0.5">
                    Procedure: {t.procedure}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-serif font-bold">
              Ready to restore your crisp 20/20 vision?
            </h4>
            <p className="text-blue-100 text-sm max-w-xl">
              Book your comprehensive 120-point diagnostic examination with Nazeer Eye Care's surgical faculty today.
            </p>
          </div>
          {onOpenAppointment && (
            <button
              onClick={onOpenAppointment}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Book Priority Consultation
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};
