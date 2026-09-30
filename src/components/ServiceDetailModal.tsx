import React from 'react';
import { X, Clock, ShieldAlert, Sparkles, CheckCircle2, Calendar, Cpu, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-all cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest font-bold text-white px-2.5 py-1 rounded bg-blue-600/90 inline-block shadow-sm">
                {service.categoryLabel}
              </span>
              {service.urduTitle && (
                <span className="text-xs font-semibold text-white px-3 py-1 rounded bg-slate-900/85 border border-white/20 inline-block backdrop-blur-md">
                  {service.urduTitle}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Clinical Overview
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Operating Time
              </span>
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                {service.procedureTime}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Visual Recovery
              </span>
              <span className="text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                {service.recoveryTime}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Anesthesia Protocol
              </span>
              <span className="text-xs font-semibold text-slate-700">
                {service.anesthesia}
              </span>
            </div>
          </div>

          {/* Clinical Steps Roadmap (if available) */}
          {service.clinicalSteps && service.clinicalSteps.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
                Clinical & Surgical Workflow Protocol
              </h4>
              <div className="space-y-2">
                {service.clinicalSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Primary Clinical Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Surgical Highlights & Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Profile */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500">
              Ideal Patient Candidate Profile
            </h4>
            <p className="text-xs text-slate-600">
              {service.candidateProfile}
            </p>
          </div>

          {/* Technology Integrated */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
            <Cpu className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <span className="font-bold block">Hospital Equipment Suite:</span>
              <span>{service.technology}</span>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Performed at Nazeer Eye Care Surgical Hospital, Lahore.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const sId = service.id;
                  onClose();
                  onBook(sId);
                }}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Procedure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
