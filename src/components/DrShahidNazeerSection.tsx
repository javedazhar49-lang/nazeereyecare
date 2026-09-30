import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Microscope, 
  Activity, 
  Award, 
  GraduationCap, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  ChevronRight,
  Stethoscope,
  HeartPulse,
  AlertCircle
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/clinicData';
import drNazeerSurgeryImg from '../assets/images/dr_nazeer_surgery_drive.png';
import drNazeerConsultImg from '../assets/images/dr_nazeer_patient_consultation_drive.png';
import drNazeerExamImg from '../assets/images/dr_nazeer_slitlamp_drive.png';
import drShahidPortraitImg from '../assets/images/dr_shahid_drive_exact.png';
import { motion } from 'motion/react';

interface DrShahidNazeerSectionProps {
  onBookConsultation: () => void;
  onExploreExpertise: (serviceId?: string) => void;
}

export const DrShahidNazeerSection: React.FC<DrShahidNazeerSectionProps> = ({
  onBookConsultation,
  onExploreExpertise
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'surgery' | 'consultation' | 'examination'>('all');
  const chiefDoctor = DOCTORS_DATA.find(d => d.isChief) || DOCTORS_DATA[0];

  // Specific surgical and clinical procedures Dr. Shahid Nazeer is expert in
  const clinicalExpertise = [
    {
      id: "corneal-transplants",
      title: "Corneal Transplant & Endothelial Keratoplasty / Boston Keratoplasty (قرنیہ کی پیوند کاری اور مصنوعی قرنیہ)",
      role: "Chief Corneal Transplant Surgeon",
      summary: "Over 30 years pioneering corneal transplant & endothelial keratoplasty / Boston keratoplasty (artificial cornea), restoring crystal clear sight for scarred and opaque corneas.",
      details: [
        "Certified international donor corneal tissue grafting",
        "Advanced sutureless endothelial keratoplasty (DSAEK / DMEK)",
        "Boston Keratoprosthesis (Artificial Cornea) for high-risk and repeat graft cases",
        "Over 12,000 successful corneal transplant procedures",
        "Limbal stem cell grafting (SLET) for chemical injury ocular surface reconstruction"
      ],
      equipment: "Zeiss Lumera 700 Surgical Microscope, Boston KPro & Cornea Tissue Bank",
      badge: "National Pioneer"
    },
    {
      id: "glasses-removal",
      title: "Glasses Removal & Femto LASIK (عینک سے ہمیشہ کے لیے نجات)",
      role: "Refractive Laser Authority",
      summary: "High-precision blade-free German laser vision correction and Phakic ICL implantation for myopia, hyperopia, and extreme astigmatism.",
      details: [
        "German Schwind Amaris 750 Hz wavefront-optimized excimer laser",
        "Blade-free femtosecond flap creation with sub-micron accuracy",
        "Swiss STAAR EVO+ ICL implantation for high refractive numbers (-0.5 to -20D)",
        "Zero-blade PRK and Trans-PRK for thin corneal profiles"
      ],
      equipment: "swiss Amaris 750 Hz & Pentacam HR Scheimpflug Scanner and icl.",
      badge: "Blade-Free Precision"
    },
    {
      id: "phaco-cataract",
      title: "Micro-Incision Phaco Cataract (سفید موتیا کا بغیر ٹانکے علاج)",
      role: "Senior Phacoemulsification Specialist",
      summary: "Rapid 10-minute stitchless cataract extraction with premium foldable monofocal, EDOF, and trifocal intraocular lens (IOL) implantation.",
      details: [
        "Micro-coaxial 1.8mm to 2.2mm incisions with immediate seal",
        "Topical anesthetic eye drops (no injections, zero pain)",
        "Premium Alcon AcrySof IQ, PanOptix Trifocal & Vivity EDOF lenses",
        "Same-day discharge with rapid visual recovery within 24 hours"
      ],
      equipment: "Alcon Infiniti / Centurion Vision System & IOLMaster 700",
      badge: "Stitchless & Painless"
    },
    {
      id: "retinal-detachment",
      title: "Vitreoretinal & Retinal Detachment (پردہ بصارت اور 25G سرجری)",
      role: "Tertiary Vitreoretinal Consultant",
      summary: "Emergency sutureless 25-gauge pars plana vitrectomy for acute retinal tears, detachments, diabetic hemorrhages, and macular holes.",
      details: [
        "25G ultra-high-speed sutureless vitrectomy eliminating trauma",
        "Endolaser photocoagulation & gas/silicone oil internal tamponade",
        "Intravitreal Anti-VEGF (Eylea, Lucentis, Avastin) for diabetic edema",
        "Immediate urgent intake protocol for acute flashes and floaters"
      ],
      equipment: "Alcon Constellation Vitrectomy Suite & Purepoint Green Laser",
      badge: "Emergency Sight-Saving"
    },
    {
      id: "glaucoma-treatment",
      title: "Advanced Glaucoma Management (کالا موتیا کا جدید علاج)",
      role: "Glaucoma Specialist",
      summary: "Comprehensive early detection of intraocular pressure, YAG laser iridotomy, and micro-trabeculectomy with antimetabolites to halt optic nerve damage.",
      details: [
        "Goldmann applanation tonometry and automated Humphrey visual field testing",
        "Optical Coherence Tomography (OCT) RNFL nerve fiber layer analysis",
        "Micro-trabeculectomy with Ologen implant or Mitomycin-C",
        "Nd:YAG laser peripheral iridotomy for narrow angle prevention"
      ],
      equipment: "Humphrey Field Analyzer 3 & Zeiss Cirrus HD-OCT",
      badge: "Optic Nerve Protection"
    },
    {
      id: "keratoconus",
      title: "Keratoconus Customized Treatment CXL to CAIRS (کیراٹوکونس اور جدید علاج)",
      role: "Corneal Ectasia Consultant",
      summary: "Halting progressive cone protrusion and restoring corneal architecture with keratoconus customized treatment CXL to CAIRS (Corneal Allogenic Intrastromal Ring Segments) and scleral optics.",
      details: [
        "Comprehensive customized protocol from accelerated CXL to CAIRS ring segments",
        "Halts keratoconus thinning progression in >95% of treated patients",
        "Custom Riboflavin-UVA photopolymerization strengthening corneal fibers",
        "Topography-guided surface normalization for irregular astigmatism",
        "expert opinion on tomogram"
      ],
      equipment: "Avedro KXL Accelerated UV Cross-Linking System & CAIRS Instrumentation",
      badge: "CXL to CAIRS Protocol"
    }
  ];

  return (
    <section id="about-us" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div id="dr-nazeer" className="absolute -top-24 pointer-events-none"></div>
      <div id="about" className="absolute -top-24 pointer-events-none"></div>
      {/* Background Optical Accent */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-50/80 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-sky-50/70 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* 1. SECTION HEADER WITH PRESTIGIOUS ACCREDITATION & HONORS      */}
        {/* ============================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800 shadow-sm">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Chief Medical Director & Senior Professor of Ophthalmology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Professor Dr. Shahid Nazeer <br />
            <span className="blue-gradient-text text-2xl sm:text-3xl lg:text-4xl">
              MBBS, MCPS (Ophthalmology), FRCS (Ophthalmology)
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Internationally qualified senior eye surgeon with over <strong>26 years of clinical leadership</strong> and <strong>31,000+ completed sight-restoring procedures</strong>. Head of Ophthalmology at Nazeer Eye Care, Lions Medical Complex, specializing in pioneering corneal transplantation, microsurgical cataract phaco, vitreoretinal repair, and laser glasses removal.
          </p>

          {/* Quick Key Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              FRCS (Royal College of Surgeons, UK)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              MCPS (CPSP Pakistan)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              26+ Years Tertiary Microsurgical Mastery
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
              31,000+ Procedures Completed
            </span>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. DIRECT OPD CONSULTATION HOURS & PRIORITY ACTION BANNER      */}
        {/* ============================================================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-blue-900/50"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Doctor Portrait Thumbnail */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-full lg:max-w-[300px] aspect-square rounded-3xl overflow-hidden border-2 border-blue-400/80 shadow-2xl group bg-slate-900">
                <img
                  src={drShahidPortraitImg}
                  alt="Consult Prof. Dr. Shahid Nazeer at Nazeer Eye Care"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-center">
                  <span className="text-xs font-bold text-white block leading-tight">
                    Prof. Dr. Shahid Nazeer
                  </span>
                  <span className="text-[10px] text-blue-300 font-medium leading-none block mt-0.5">
                    Chief Medical Director • Nazeer Eye Care
                  </span>
                </div>
              </div>
            </div>

            {/* Timings and Details */}
            <div className="lg:col-span-5 space-y-3 text-center flex flex-col items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 inline-block mx-auto">
                OPD Consultation Hours & Schedule
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white text-center">
                Consult Prof. Dr. Shahid Nazeer
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl text-center mx-auto">
                OPD consultations are held from <strong>Monday to Thursday & Saturday</strong> from <strong>2:00 PM to 5:00 PM</strong>.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-200 border border-blue-400/30 font-semibold">
                  <Clock className="w-4 h-4 text-blue-300" />
                  Mon – Thu & Sat: 2:00 PM – 5:00 PM
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/30 font-semibold">
                  Friday & Sunday: OFF (Closed)
                </span>
              </div>

              {/* Banner Note */}
              <div className="w-full mt-2 p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-left flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-100 font-medium leading-snug">
                  <strong className="text-amber-300 uppercase tracking-wide mr-1">Note for appointment:</strong>
                  Can visit between 2pm to 5pm, examination will be on your turn.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <button
                onClick={onBookConsultation}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:04235760200"
                className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Call Hospital: 042-35760200</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* DEDICATED NOTE SECTION - APPOINTMENT & QUEUE GUIDANCE          */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-7 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-md relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-200 text-amber-950 font-black text-xs uppercase tracking-wider">
                    Note for appointment
                  </span>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    Clinic Timing & Queue Policy
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Note for appointment
                </h4>
                <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-bold text-amber-950">
                  Can visit between 2pm to 5pm, examination will be on your turn.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    OPD Hours: 2:00 PM – 5:00 PM (Mon to Thu & Sat)
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200">
                    Friday & Sunday: OFF (Closed)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
              <a
                href="https://wa.me/923474993610?text=Hello%20Nazeer%20Eye%20Care,%20I%20want%20to%20visit%20between%202pm%20to%205pm%20for%20examination%20with%20Prof.%20Dr.%20Shahid%20Nazeer."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>WhatsApp: 0347-4993610</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 3. REAL CLINICAL IN-ACTION VISUAL GALLERY                      */}
        {/* Operations, Slit-Lamp Microscope Exam, Laser Suite             */}
        {/* ============================================================== */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">
                Clinical Excellence In Practice
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Dr. Shahid Nazeer in Clinical Action
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Views
              </button>
              <button
                onClick={() => setActiveTab('surgery')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'surgery' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Eye Surgery (OT)
              </button>
              <button
                onClick={() => setActiveTab('consultation')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'consultation' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Patient Consultation
              </button>
              <button
                onClick={() => setActiveTab('examination')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'examination' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Microscope Exam
              </button>
            </div>
          </div>

          {/* Three Distinct Live Action Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Performing Eye Surgery in OT */}
            {(activeTab === 'all' || activeTab === 'surgery') && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={drNazeerSurgeryImg}
                    alt="Prof. Dr. Shahid Nazeer performing eye surgery in sterile operation theater"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-md">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Live Eye Surgery</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-bold block text-white/95">
                      Microsurgical Operation Theater
                    </span>
                    <span className="text-[11px] text-blue-200">
                      HEPA Sterile Class-100 Surgical Suite
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Performing Delicate Corneal & Cataract Surgeries
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Prof. Dr. Shahid Nazeer performing delicate microsurgical corneal grafting, stitchless phacoemulsification, and vitreo-retinal procedures with sub-micron surgical instruments in a sterile hospital operating suite.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Precision: Sub-micron</span>
                    <span className="text-emerald-600 font-semibold">Zero-Stitch Technique</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Card 2: Patient Consultation & Health Assessment */}
            {(activeTab === 'all' || activeTab === 'consultation') && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={drNazeerConsultImg}
                    alt="Prof. Dr. Shahid Nazeer - Patient Consultation & Health Assessment"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-[11px] font-bold shadow-md">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Patient Consultation</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-bold block text-white/95">
                      Direct OPD Consultation Desk
                    </span>
                    <span className="text-[11px] text-amber-200">
                      Personal Health & Vision Assessment
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Consulting with Patient & Health Evaluation
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Prof. Dr. Shahid Nazeer sitting with patients at his consultation desk, listening carefully to symptoms, evaluating eye health history, and reassuringly explaining custom surgical options.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-medium gap-1">
                    <span className="font-semibold text-slate-700">OPD: Mon–Thu & Sat (2PM–5PM)</span>
                    <span className="text-rose-600 font-bold text-[11px] bg-rose-50 px-2 py-0.5 rounded border border-rose-100">Fri & Sun OFF</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Card 3: The Single Slit-Lamp Microscope Diagnostic Examination */}
            {(activeTab === 'all' || activeTab === 'examination') && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={drNazeerExamImg}
                    alt="Prof. Dr. Shahid Nazeer conducting precision slit-lamp biomicroscopy examination"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md">
                    <Microscope className="w-3.5 h-3.5" />
                    <span>Slit-Lamp & Bio-Microscopy</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-bold block text-white/95">
                      Cornea & Anterior Segment Examination
                    </span>
                    <span className="text-[11px] text-emerald-200">
                      High-Precision Slit-Lamp Bio-Microscopy
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      High-Precision Slit-Lamp Eye Examination
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Detailed biomicroscopic optical evaluation to assess corneal clarity, tear film stability, crystalline lens density, and intraocular pressures before any laser or surgery is scheduled.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Optical Zoom: 40x</span>
                    <span className="text-emerald-600 font-semibold">Pre-Op Evaluation</span>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. CORE SPECIALTIES & DETAILED CLINICAL EXPERTISE SECTIONS     */}
        {/* Detailed with names of specific conditions Dr. Nazeer treats   */}
        {/* ============================================================== */}
        <div className="space-y-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span>Specialized Surgical Portfolio</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Clinical Disciplines & Procedures Led by Dr. Shahid Nazeer
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Every department listed below is directly supervised and operated by Professor Dr. Shahid Nazeer with specialized instrumentation and verified clinical outcomes.
              </p>
            </div>

            <button
              onClick={onBookConsultation}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment with Dr. Nazeer</span>
            </button>
          </div>

          {/* Grid of 6 Detailed Clinical Focus Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalExpertise.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {exp.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {exp.role}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Key Surgical Protocols:
                    </span>
                    {exp.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Equipment Tag */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 font-medium">
                    <strong className="text-slate-800">Technology:</strong> {exp.equipment}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onExploreExpertise(exp.id)}
                    className="flex-1 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onBookConsultation}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult Dr. Nazeer</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
