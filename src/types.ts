export interface ServiceItem {
  id: string;
  title: string;
  urduTitle?: string;
  category: string;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  technology: string;
  procedureTime: string;
  recoveryTime: string;
  anesthesia: string;
  candidateProfile: string;
  highlights: string[];
  clinicalSteps?: string[];
  imageUrl: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  designation: string;
  credentials: string[];
  specialty: string;
  subSpecialties: string[];
  experienceYears: number;
  surgeriesCompleted: string;
  bio: string;
  education: string[];
  memberships: string[];
  consultationDays: string;
  consultationTimings: string;
  imageUrl: string;
  isChief?: boolean;
}

export interface TechnologyItem {
  id: string;
  name: string;
  origin: string;
  role: string;
  description: string;
  specs: string[];
  badge: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  age: number;
  profession: string;
  procedure: string;
  surgeon: string;
  rating: number;
  quote: string;
  outcome: string;
  date: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  doctorId: string;
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  symptoms: string;
  isEmergency: boolean;
}
