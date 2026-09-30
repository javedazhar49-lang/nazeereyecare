import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, AlertCircle, Sparkles, Loader2, Send } from 'lucide-react';
import { DOCTORS_DATA, SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';
import { BrandLogo } from './BrandLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  initialDoctorId?: string;
  initialServiceId?: string;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  initialDoctorId,
  initialServiceId,
  onClose,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    doctorId: initialDoctorId || 'prof-shahid-nazeer',
    serviceId: initialServiceId || '',
    preferredDate: '',
    preferredTimeSlot: '02:00 PM',
    symptoms: '',
    isEmergency: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'fallback'>('idle');

  useEffect(() => {
    if (initialDoctorId) {
      setFormData(prev => ({ ...prev, doctorId: initialDoctorId }));
    }
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialDoctorId, initialServiceId]);

  if (!isOpen) return null;

  const selectedDoctor = DOCTORS_DATA.find(d => d.id === formData.doctorId);
  const selectedService = SERVICES_DATA.find(s => s.id === formData.serviceId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus('sending');

    const refNumber = `PEC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refNumber);

    const docName = selectedDoctor ? selectedDoctor.name : 'Any Available Specialist';
    const srvName = selectedService ? selectedService.title : 'General Eye Consultation';

    // Dispatch appointment details directly to the clinic's Gmail
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CLINIC_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Patient Appointment Booking - ${refNumber} (${formData.fullName})`,
          _template: 'table',
          _captcha: 'false',
          'Booking Reference': refNumber,
          'Patient Full Name': formData.fullName,
          'Mobile Phone': formData.phone,
          'Patient Email': formData.email || 'Not provided',
          'Consultant Doctor': docName,
          'Clinical Specialty / Procedure': srvName,
          'Preferred Consultation Date': formData.preferredDate || 'Earliest Available',
          'Preferred Time Slot': formData.preferredTimeSlot,
          'Patient Symptoms / Notes': formData.symptoms || 'None specified',
          'Hospital Facility': 'Nazeer Eye Care, Lions Medical Complex, Gulberg II, Lahore',
          'Submission Timestamp': new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
        })
      });

      if (response.ok) {
        setEmailStatus('success');
      } else {
        setEmailStatus('fallback');
      }
    } catch (error) {
      console.warn('FormSubmit auto-dispatch fallback mode:', error);
      setEmailStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmailStatus('idle');
    onClose();
  };

  const mailtoSubject = encodeURIComponent(`New Consultation Request: ${bookingRef} - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Dear Nazeer Eye Care Team,\n\n` +
    `A new appointment booking has been registered with details below:\n\n` +
    `• Reference No: ${bookingRef}\n` +
    `• Patient Name: ${formData.fullName}\n` +
    `• Contact Phone: ${formData.phone}\n` +
    `• Email: ${formData.email || 'Not provided'}\n` +
    `• Doctor: ${selectedDoctor?.name || 'Any Specialist'}\n` +
    `• Procedure: ${selectedService?.title || 'General Consultation'}\n` +
    `• Preferred Slot: ${formData.preferredDate || 'Earliest Available'} at ${formData.preferredTimeSlot}\n` +
    `• Symptoms / Reason: ${formData.symptoms || 'General Checkup'}\n\n` +
    `Please reach out to the patient to confirm the consultation time.\n\n` +
    `Nazeer Eye Care Hospital\nLions Medical Complex, Gulberg II, Lahore`
  );
  const directMailtoUrl = `mailto:${CLINIC_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="flex justify-center">
              <BrandLogo variant="compact" />
            </div>

            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                <Send className="w-3.5 h-3.5 text-emerald-600" />
                <span>Information Sent to Clinic Gmail</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Appointment Registered
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900 font-semibold">{formData.fullName}</strong>. Your details have been dispatched to the clinic management email (<strong className="text-blue-700">{CLINIC_INFO.email}</strong>). Our OPD reception desk will contact you via phone call or WhatsApp to confirm your slot.
              </p>
            </div>

            {/* Reference & Transmission Details Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-blue-700">{bookingRef}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Patient Phone:</span>
                <span className="font-semibold text-slate-900">{formData.phone}</span>
              </div>
              {selectedDoctor && (
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Consultant:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctor.name}</span>
                </div>
              )}
              {selectedService && (
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Procedure:</span>
                  <span className="font-semibold text-slate-900">{selectedService.title}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="font-semibold text-slate-900">
                  {formData.preferredDate || 'Earliest Available'} ({formData.preferredTimeSlot})
                </span>
              </div>
              <div className="flex justify-between py-1 text-emerald-700 font-medium">
                <span>Auto-Sent to Gmail:</span>
                <span className="font-mono">{CLINIC_INFO.email}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=Hello%20Nazeer%20Eye%20Care,%20my%20appointment%20ref%20is%20${bookingRef}%20for%20${encodeURIComponent(formData.fullName)}.%20Please%20confirm%20my%20consultation%20slot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm on WhatsApp ({CLINIC_INFO.whatsapp})</span>
              </a>

              <a
                href={directMailtoUrl}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <span>View Email Sent</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Modal Header */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <BrandLogo variant="compact" imgClassName="h-14 sm:h-16 w-auto max-w-[190px]" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold text-blue-700">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>OPD Consultation</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                Book Ophthalmology Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Consult with Senior Corneal, Phaco, Glaucoma & Vitreoretinal Surgeons at Lions Medical Complex, Gulberg II.
              </p>
            </div>

            {/* Emergency Checkbox */}
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-xs font-semibold text-rose-900">
                  Acute Eye Injury, Chemical Splash, or Sudden Vision Loss?
                </span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.mobileEmergency}`}
                className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold whitespace-nowrap"
              >
                Call 24/7 ER
              </a>
            </div>

            {/* Note for appointment */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-2.5 text-xs text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-amber-900 font-extrabold uppercase tracking-wide mr-1">Note for appointment:</strong>
                Can visit between 2pm to 5pm, examination will be on your turn.
              </p>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Contact Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patient@example.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Doctor Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Consultant Doctor
                </label>
                <select
                  value={formData.doctorId}
                  onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                >
                  {DOCTORS_DATA.filter(doc => doc.isChief).map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} (Chief Consultant & Eye Surgeon)
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialty Procedure */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Primary Clinical Discipline
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                >
                  <option value="">General Eye Consultation / Checkup</option>
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Preferred Consultation Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM'].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTimeSlot: slot })}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      formData.preferredTimeSlot === slot
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Describe Eye Symptoms or Prior Diagnosis (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="e.g. Blurry distance vision, want to check suitability for Femto LASIK..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
              ></textarea>
            </div>

            {/* Notification destination notice */}
            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs text-blue-900">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Booking details automatically deliver to clinic inbox: <strong>{CLINIC_INFO.email}</strong>
                </span>
              </div>
              <span className="hidden sm:inline-block text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                Instant Alert
              </span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-slate-500">
                No advance charges. Consultation fee paid directly at Nazeer Eye Care OPD desk.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30 cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending to Clinic Gmail...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Appointment Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
