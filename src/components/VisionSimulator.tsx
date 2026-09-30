import React, { useState } from 'react';
import { Eye, CheckCircle2, ArrowRight, Sparkles, RefreshCw, Info } from 'lucide-react';
import { VISION_SIMULATION_MODES } from '../data/clinicData';
import { motion } from 'motion/react';

interface VisionSimulatorProps {
  onBookTreatment: (serviceCategory: string) => void;
  onExploreServices: () => void;
}

export const VisionSimulator: React.FC<VisionSimulatorProps> = ({ onBookTreatment, onExploreServices }) => {
  const [activeMode, setActiveMode] = useState(VISION_SIMULATION_MODES[0].id);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100

  const currentCondition = VISION_SIMULATION_MODES.find(m => m.id === activeMode) || VISION_SIMULATION_MODES[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const getTreatmentCategory = (id: string) => {
    switch (id) {
      case 'myopia':
      case 'astigmatism':
        return 'lasik';
      case 'cataract':
        return 'cataract';
      case 'diabetic-retinopathy':
        return 'retina';
      default:
        return 'lasik';
    }
  };

  return (
    <section id="vision-lab" className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-200">
      <div id="vision-simulator" className="absolute -top-24 pointer-events-none"></div>
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Vision Lab • Clarity Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Vision Lab: Experience Vision Before & After <span className="blue-gradient-text">Precision Treatment</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Welcome to the <strong>Nazeer Eye Care Vision Lab</strong>. Drag the interactive optical lens slider below to see how common ophthalmic disorders degrade acuity, and how our advanced microsurgery and laser technologies restore crisp 20/20 vision.
          </p>
        </motion.div>

        {/* Condition Selector Tabs - All clickable buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-8"
        >
          {VISION_SIMULATION_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeMode === mode.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-slate-50 text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{mode.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Interactive Comparison Simulator Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-4 sm:p-6 shadow-xl shadow-slate-200/50"
        >
          <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden select-none bg-slate-900 shadow-inner">
            {/* Base Image (Simulated Impaired Vision Side) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80"
                alt="Simulated Vision Condition"
                className={`w-full h-full object-cover ${currentCondition.blurLevel} ${currentCondition.contrast}`}
              />
              {currentCondition.overlay && (
                <div className={`absolute inset-0 ${currentCondition.overlay}`}></div>
              )}
            </div>

            {/* Overlaid Crisp Image (Post-Treatment 20/20 Vision Side) */}
            <div
              className="absolute inset-y-0 right-0 overflow-hidden"
              style={{ width: `${100 - sliderPosition}%` }}
            >
              <div 
                className="absolute inset-y-0 right-0"
                style={{ width: '100%', minWidth: '800px' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80"
                  alt="Clear Restored Vision"
                  className="w-full h-full object-cover filter contrast-105 brightness-105"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Vertical Split Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(37,99,235,0.8)] pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white border-2 border-white shadow-lg flex items-center justify-center text-[10px] font-bold">
                <RefreshCw className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Overlay Labels */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide">
              Before Treatment: {currentCondition.name.split(' ')[0]}
            </div>

            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-blue-600/90 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wide flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
              After Nazeer Eye Care Surgery
            </div>

            {/* Native Touch/Mouse Slider Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              aria-label="Vision comparison slider"
            />
          </div>

          {/* Condition Detail & Treatment Link Bar */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Condition Analysis: {currentCondition.name}</span>
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
                {currentCondition.description}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onExploreServices}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={() => onBookTreatment(getTreatmentCategory(activeMode))}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
