import React, { useState } from 'react';
import { Award, Calendar, Clock, GraduationCap, ChevronRight, UserCheck, ShieldCheck, HeartPulse, X, ArrowRight, User, Sparkles, CheckCircle2, Stethoscope, Star, AlertCircle } from 'lucide-react';
import { DOCTORS_DATA } from '../data/clinicData';
import { DoctorProfile } from '../types';
import drShahidPortraitImg from '../assets/images/dr_shahid_drive_exact.png';
import { motion, AnimatePresence } from 'motion/react';

interface DoctorProfilesProps {
  onBookDoctor: (doctorId: string) => void;
}

export const DoctorProfiles: React.FC<DoctorProfilesProps> = ({ onBookDoctor }) => {
  const [activeDoctorModal, setActiveDoctorModal] = useState<DoctorProfile | null>(null);

  // Remaining specialized consultant faculty
  const facultyMembers = DOCTORS_DATA.filter(d => !d.isChief);

  return (
    <section id="doctors" className="py-24 bg-white relative border-t border-b border-slate-200">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[120px] pointer-events-none"></div>

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
            <Award className="w-4 h-4 text-blue-600" />
            <span>Consultant Surgical Board & Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Consultant Ophthalmic <span className="blue-gradient-text">Faculty</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Alongside Chief Consultant Prof. Dr. Shahid Nazeer, our senior ophthalmic surgical board comprises certified corneal transplant surgeons, pediatric strabismus specialists, and anterior segment fellows.
          </p>
        </motion.div>

        {/* Doctor Grid (Consultant Faculty) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between group"
            >
              {/* Doctor Headshot & Badges */}
              <div 
                className="relative h-72 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveDoctorModal(doctor)}
              >
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

                {/* Experience Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-bold text-blue-700 shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  <span>{doctor.experienceYears}+ Years Exp.</span>
                </div>

                {/* Surgeries Count Pill */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-semibold text-slate-700 shadow-sm">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                  <span>{doctor.surgeriesCompleted}</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                  Click to view full qualifications & schedule
                </div>
              </div>

              {/* Doctor Information Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 
                    onClick={() => setActiveDoctorModal(doctor)}
                    className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">
                    {doctor.designation}
                  </p>
                </div>

                {/* Specialty Pill & Credentials */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-800 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg">
                    Focus: {doctor.specialty}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {doctor.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation Schedule Info */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{doctor.consultationDays}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{doctor.consultationTimings}</span>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveDoctorModal(doctor)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Doctor Info</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>

                  <button
                    onClick={() => onBookDoctor(doctor.id)}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Clinic</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comprehensive Doctor Information Modal */}
      <AnimatePresence>
        {activeDoctorModal && (
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

            {/* Doctor Info Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2">
              <img
                src={activeDoctorModal.imageUrl}
                alt={activeDoctorModal.name}
                className="w-24 h-24 rounded-2xl object-cover object-top border-2 border-blue-500 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1 text-center sm:text-left">
                {activeDoctorModal.isChief && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 inline-block mb-1">
                    Chief Consultant & Senior Professor
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  {activeDoctorModal.name}
                </h3>
                <p className="text-xs text-blue-700 font-semibold">
                  {activeDoctorModal.designation}
                </p>
                <div className="flex flex-wrap gap-1 justify-center sm:justify-start pt-1">
                  {activeDoctorModal.credentials.map((c, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold border border-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Clinical Biography & Surgical Leadership
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeDoctorModal.bio}
              </p>
            </div>

            {/* Education & Memberships */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Academic Fellowships & Training
                </h5>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  {activeDoctorModal.education.map((edu, i) => (
                    <li key={i}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Recognized Memberships
                </h5>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  {activeDoctorModal.memberships.map((mem, i) => (
                    <li key={i}>{mem}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Consultation Timings Banner */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block">
                  OPD Consultation Schedule
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {activeDoctorModal.consultationDays} ({activeDoctorModal.consultationTimings})
                </span>
              </div>
              <button
                onClick={() => {
                  const docId = activeDoctorModal.id;
                  setActiveDoctorModal(null);
                  onBookDoctor(docId);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Book This Doctor
              </button>
            </div>

            {/* Note for appointment */}
            <div className="mt-3 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-amber-900 font-extrabold uppercase tracking-wide mr-1">Note for appointment:</strong>
                Can visit between 2pm to 5pm, examination will be on your turn.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
};
