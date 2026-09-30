import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DrShahidNazeerSection } from './components/DrShahidNazeerSection';
import { VisionSimulator } from './components/VisionSimulator';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ClinicInfoAndMap } from './components/ClinicInfoAndMap';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from './data/clinicData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | undefined>(undefined);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (doctorId?: string, serviceId?: string) => {
    setPreselectedDoctorId(doctorId);
    setPreselectedServiceId(serviceId);
    setAppointmentModalOpen(true);
  };

  const handleBookFromSimulator = (serviceCategory: string) => {
    // Map category to a typical service id
    let srvId = 'glasses-removal';
    if (serviceCategory === 'cataract') srvId = 'phaco-cataract';
    if (serviceCategory === 'retina') srvId = 'retinal-detachment';
    handleOpenAppointment('prof-shahid-nazeer', srvId);
  };

  const handleOpenServiceByNameOrId = (serviceId?: string) => {
    if (!serviceId) {
      scrollToSection('services');
      return;
    }
    const found = SERVICES_DATA.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    } else {
      scrollToSection('services');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600/20 selection:text-blue-900 relative">
      {/* Executive Navigation */}
      <Navbar 
        onOpenAppointment={() => handleOpenAppointment()} 
        activeSection="home" 
      />

      {/* Hero Section with direct action triggers */}
      <Hero
        onOpenAppointment={() => handleOpenAppointment('prof-shahid-nazeer')}
        onExploreServices={() => scrollToSection('services')}
        onOpenSimulator={() => scrollToSection('vision-simulator')}
        onOpenDoctors={() => scrollToSection('dr-nazeer')}
        onOpenLocation={() => scrollToSection('location')}
      />

      {/* 🌟 Dedicated In-Depth Section: Professor Dr. Shahid Nazeer (Operations, Slit-Lamp Exam, Lasers, Degrees, Detailed Specialty Modules) */}
      <DrShahidNazeerSection
        onBookConsultation={() => handleOpenAppointment('prof-shahid-nazeer')}
        onExploreExpertise={(serviceId) => handleOpenServiceByNameOrId(serviceId)}
      />

      {/* Comprehensive Ophthalmology Services & Specialties */}
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onBookService={(serviceId) => handleOpenAppointment('prof-shahid-nazeer', serviceId)}
      />

      {/* Interactive Vision Clarity Simulator */}
      <VisionSimulator 
        onBookTreatment={handleBookFromSimulator} 
        onExploreServices={() => scrollToSection('services')}
      />

      {/* Central Lahore Campus, Hours & Directions */}
      <ClinicInfoAndMap
        onOpenAppointment={() => handleOpenAppointment('prof-shahid-nazeer')}
      />

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Quick Action Widget (Desktop & Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=Hello%20Nazeer%20Eye%20Care,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20with%20Prof.%20Dr.%20Shahid%20Nazeer.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-700/25 transition-transform hover:scale-110"
          title="Inquire via WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenAppointment('prof-shahid-nazeer')}
          className="px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-blue-500"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book Dr. Shahid Nazeer</span>
        </button>
      </div>

      {/* Clinical Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceId) => handleOpenAppointment('prof-shahid-nazeer', serviceId)}
      />

      {/* Executive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        initialDoctorId={preselectedDoctorId}
        initialServiceId={preselectedServiceId}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </div>
  );
}
