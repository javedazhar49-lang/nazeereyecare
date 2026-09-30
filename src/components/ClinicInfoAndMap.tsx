import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Car, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { motion } from 'motion/react';

interface ClinicInfoAndMapProps {
  onOpenAppointment: () => void;
}

export const ClinicInfoAndMap: React.FC<ClinicInfoAndMapProps> = ({ onOpenAppointment }) => {
  return (
    <section id="location-hours" className="py-28 bg-[#F8FAFC] relative">
      <div id="location" className="absolute -top-24 pointer-events-none"></div>
      <div id="contact" className="absolute -top-24 pointer-events-none"></div>
      <div id="contact-us" className="absolute -top-24 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Location & Contact Architecture */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                <MapPin className="w-4 h-4" />
                <span>Hospital Location & Consulting Hours</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                Location & Hours: <span className="blue-gradient-text">Gulberg II, Lahore Campus</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nazeer Eye Care is situated at <strong className="text-slate-900 font-semibold">{CLINIC_INFO.campus}</strong>, located at 7-8/B near Alif Laila Library in Main Market, Gulberg II, Lahore. Conveniently accessible from Liberty Market, MM Alam Road, Jail Road, and the Canal Expressway.
              </p>
            </div>

            {/* Address & Direction Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Hospital Campus Address
                  </h3>
                  <p className="text-base font-semibold text-slate-900 mt-1 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <span className="text-xs text-blue-700 font-medium block mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </span>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block font-medium">Hospital Exchange</span>
                  <a
                    href={`tel:${CLINIC_INFO.phones[0]}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    {CLINIC_INFO.phones[0]}
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block font-medium">Helpline / Inquiry</span>
                  <a
                    href={`tel:${CLINIC_INFO.phones[1]}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    {CLINIC_INFO.phones[1]}
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Consultation & Emergency Helpline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=Hello%20Nazeer%20Eye%20Care,%20I%20would%20like%20to%20inquire%20about%20eye%20consultations.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between hover:bg-emerald-100/70 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      WhatsApp Appointment
                    </span>
                    <span className="text-sm font-bold text-emerald-950">
                      {CLINIC_INFO.whatsapp}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-600 text-white text-[10px] font-bold">
                    Chat
                  </span>
                </a>

                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                      Emergency Desk
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.mobileEmergency}`}
                      className="text-sm font-bold text-rose-950 hover:underline"
                    >
                      {CLINIC_INFO.mobileEmergency}
                    </a>
                  </div>
                  <a
                    href={`tel:${CLINIC_INFO.mobileEmergency}`}
                    className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-bold transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Official Clinic Email & Portal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                        Hospital Inquiries
                      </span>
                      <a
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="text-xs font-bold text-slate-900 hover:text-blue-700 transition-colors truncate block"
                      >
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-8 h-8 rounded-lg bg-sky-600/10 text-sky-700 flex items-center justify-center shrink-0 font-bold text-sm">
                      🌐
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                        Official Web Portal
                      </span>
                      <a
                        href={CLINIC_INFO.websiteUrl}
                        className="text-xs font-bold text-sky-900 hover:text-sky-700 transition-colors truncate block"
                      >
                        {CLINIC_INFO.domain}
                      </a>
                    </div>
                  </div>
                  <a
                    href={CLINIC_INFO.websiteUrl}
                    className="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-700 text-white text-[10px] font-bold transition-colors shrink-0"
                  >
                    Open
                  </a>
                </div>
              </div>

              {/* Schedule and Timings */}
              <div className="pt-2 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">General OPD Hours:</span>
                  <span className="font-semibold text-slate-900">{CLINIC_INFO.timings.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Prof. Dr. Shahid Nazeer Hours:</span>
                  <span className="font-bold text-blue-700">Mon–Thu & Sat: 2:00 PM – 5:00 PM (Fri & Sun OFF)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Consultation Recommendation:</span>
                  <span className="font-semibold text-blue-700">{CLINIC_INFO.timings.opdNote}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-medium text-slate-700">Patient Parking:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" />
                    Dedicated On-Site Parking Available
                  </span>
                </div>
              </div>

              {/* Note for appointment Box */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-amber-900 font-extrabold uppercase tracking-wide mr-1">Note for appointment:</strong>
                  Can visit between 2pm to 5pm, examination will be on your turn.
                </p>
              </div>

              {/* Map Directions & Appointment Action */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Embedded Map View */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Lions Medical Complex Nazeer Eye Care Google Map"
                  src="https://maps.google.com/maps?q=31.5229883,74.3444796+(Lions+Medical+Complex+-+Nazeer+Eye+Care)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Overlaid Location Badge Card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow">
                    NEC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Nazeer Eye Care</h4>
                    <span className="text-[11px] text-slate-600 font-medium block">7-8/B Main Market, Gulberg II, Lahore</span>
                    <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Open Monday – Saturday from 8:00 AM
                    </span>
                  </div>
                </div>

                {/* Direct Google Maps Direction Pill */}
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-blue-700 border border-blue-200 rounded-xl px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
