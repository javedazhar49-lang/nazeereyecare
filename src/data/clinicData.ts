import { ServiceItem, DoctorProfile, TechnologyItem, TestimonialItem } from '../types';
import drShahidPortraitImg from '../assets/images/dr_shahid_drive_exact.png';
import drSofiaChaudhryImg from '../assets/images/dr_sofia_chaudhry_1789973941010.jpg';
import drSumairaAsadImg from '../assets/images/dr_sumaira_asad_1789974155303.jpg';
import drMushtaqQureshiImg from '../assets/images/dr_mushtaq_qureshi_1789974563730.jpg';
import drSabrinaSharifImg from '../assets/images/dr_sabrina_sharif_1789974588746.jpg';
import cxlKeratoconusImg from '../assets/images/cxl_keratoconus_treatment_1789974526761.jpg';
import pentacamCorneaScanImg from '../assets/images/pentacam_cornea_scan_1789974548703.jpg';
import retinaSurgeryImg from '../assets/images/retina_surgery_procedure_1789974626704.jpg';
import iclLensImplantImg from '../assets/images/icl_lens_implant_1789974661642.jpg';
import pediatricSquintImg from '../assets/images/pediatric_squint_exam_1789974676668.jpg';
import stemCellGraftImg from '../assets/images/stem_cell_ocular_graft_1789974694618.jpg';
import dryEyeTreatmentImg from '../assets/images/dry_eye_meibography_exam_1789974712835.jpg';

export const CLINIC_INFO = {
  name: "Nazeer Eye Care",
  campus: "Lions Medical Complex Campus",
  tagline: "Premier Center for Advanced Eye Surgery & Corneal Transplants",
  accreditation: "PMC Certified Ophthalmic Hospital & Corneal Graft Center",
  address: "7-8/B, Near Alif Laila Library, Main Market, Gulberg II, Lahore, Punjab 54660, Pakistan",
  shortAddress: "7-8/B Main Market, Gulberg II, Lahore",
  landmark: "Near Alif Laila Library, Main Market, Gulberg II (Minutes from Liberty Market & MM Alam Road)",
  googleMapsUrl: "https://maps.app.goo.gl/hgrgd9Vd3xiN9ieD9",
  websiteUrl: "https://nazeer-eye-care.ai.studio/",
  domain: "nazeer-eye-care.ai.studio",
  coordinates: {
    lat: 31.5229883,
    lng: 74.3444796
  },
  phones: [
    "+92 (042) 35873207",
    "+92 302 4154080"
  ],
  mobileEmergency: "+92 302 0487748",
  whatsapp: "+92 347 4993610",
  whatsappNumberDigits: "923474993610",
  email: "nazeereyecare@gmail.com",
  timings: {
    weekdays: "Monday – Saturday: 8:00 AM – 2:00 PM",
    friday: "Friday: 8:00 AM – 12:00 PM",
    sunday: "Sunday: Closed (Emergency on call)",
    opdNote: "Eye Consultations: Best to visit before 11:00 AM (Monday to Saturday)",
    emergency: "24/7 Helpline & On-Call Emergency Care"
  },
  stats: [
    { label: "Cornea Care Heritage", value: "30+", unit: "Years" },
    { label: "Patients Checkup", value: "1M+", unit: "Patients" },
    { label: "Surgeries", value: "31k", unit: "Procedures" },
    { label: "Phaco Cataract Surgeries", value: "25k+", unit: "Procedures" },
    { label: "Surgical Success Rate", value: "99.7%", unit: "Precision" },
    { label: "Specialist Faculty", value: "13+", unit: "Doctors" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "glasses-removal",
    title: "Glasses Removal (Femto LASIK, SMILE & PRK)",
    urduTitle: "عینک سے نجات (Glasses Removal)",
    category: "refractive",
    categoryLabel: "Laser Vision Correction",
    shortDesc: "blade free femto implantable collamer lens.",
    fullDesc: "Under the leadership of Prof. Dr. Shahid Nazeer and our refractive surgeons, Nazeer Eye Care provides world-standard blade-free laser vision correction. Combining German Schwind Amaris 750Hz excimer technology with Femtosecond corneal flap creation, our laser precisely re-sculpts the cornea in seconds to treat Myopia, Hyperopia, and Astigmatism with 7D eye-tracking safety.",
    technology: "Schwind Amaris 750 Hz Excimer & Ziemer Femtosecond LDV",
    procedureTime: "10 - 15 minutes for both eyes",
    recoveryTime: "Crystal-clear vision within 24 hours",
    anesthesia: "Topical anesthetic eye drops (no injections, no pain)",
    candidateProfile: "Ages 18+, stable prescription for 1 year, suitable corneal thickness determined by Pentacam scan.",
    highlights: [
      "100% blade-free, painless outpatient procedure",
      "7D active eye-tracking tracking micro-saccadic eye movements",
      "Wavefront-guided customized ablation for crisp night driving",
      "Over 99.8% of patients achieve 20/20 or better uncorrected vision"
    ],
    clinicalSteps: [
      "Comprehensive Pentacam HR corneal tomography & wavefront mapping",
      "Blade-free laser corneal flap creation in under 15 seconds",
      "High-speed 750Hz laser reshaping of the corneal curvature",
      "Gentle natural flap repositioning with instant adhesion",
      "Next-day visual acuity assessment and recovery check"
    ],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "corneal-transplant",
    title: "Corneal Transplant & endothelial keratoplasty / bostan keratoplasty ( artificial cornea )",
    urduTitle: "قرنیہ کی پیوند کاری اور مصنوعی قرنیہ (Corneal Transplant & Boston Keratoprosthesis)",
    category: "cornea",
    categoryLabel: "Cornea & Transplants",
    shortDesc: "Punjab's pioneering center performing corneal transplant, sutureless endothelial keratoplasty (DSAEK/DMEK), and Boston keratoprosthesis (artificial cornea).",
    fullDesc: "Nazeer Eye Care at Lions Medical Complex is the historic pioneer of sight-restoring corneal transplantation in Lahore since 1995. With regular, certified donor tissue partnerships from the International Eye Bank (Dr. Hudson Silva), our team performs full-thickness and advanced sutureless endothelial keratoplasty, as well as Boston Keratoprosthesis (artificial cornea) for complex, high-risk or repeat graft failure cases to restore light to diseased or opaque eyes.",
    technology: "Zeiss OPMI Lumera 700 Microscope, Endothelial Trephine Micro-Instrumentation & Boston KPro System",
    procedureTime: "45 - 60 minutes",
    recoveryTime: "Progressive visual rehabilitation with dedicated corneal specialist care",
    anesthesia: "Local or general anesthesia",
    candidateProfile: "Patients with corneal opacity, bullous keratopathy, endothelial dysfunction, corneal scars, severe ocular trauma, or multiple failed standard grafts.",
    highlights: [
      "30+ years institutional heritage in certified corneal transplantation",
      "Specialized Endothelial Keratoplasty (DSAEK / DMEK) with rapid recovery",
      "Boston Keratoprosthesis (Artificial Cornea) expertise for high-risk graft rejection cases",
      "Regular tissue supply from accredited international eye banks",
      "Long-term post-operative graft surveillance and anti-rejection care"
    ],
    clinicalSteps: [
      "Microscopic endothelial cell count (Specular microscopy) & pachymetry",
      "Procurement and quality screening of certified donor corneal button",
      "Precision microsurgical trephination and excision of scarred cornea",
      "Micro-suture alignment using 10-0 nylon or air-bubble endothelial fixation",
      "Comprehensive post-operative anti-inflammatory and graft survival protocol"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cataract",
    title: "Cataract (Micro-Incision Phaco & Premium IOLs)",
    urduTitle: "سفید موتیا کا علاج (Cataract Surgery)",
    category: "cataract",
    categoryLabel: "Cataract & Lens",
    shortDesc: "Stitchless 2.2mm micro-phacoemulsification with world-class foldable Trifocal, Toric, and Extended Depth of Focus (EDOF) intraocular lenses.",
    fullDesc: "Reclaim youthful clarity with sutureless Micro-Incision Cataract Surgery (MICS). Using gentle ultrasonic energy and fluidics, the clouded natural crystalline lens is emulsified and replaced with premium foldable artificial intraocular lenses (Zeiss AT LISA Tri, Alcon AcrySof IQ Toric), providing simultaneous freedom from reading and distance glasses.",
    technology: "Alcon Centurion Vision System & IOLMaster 700 Biometry",
    procedureTime: "10 - 15 minutes per eye",
    recoveryTime: "Immediate visual brightening, stable within 3-5 days",
    anesthesia: "Topical drop anesthesia (stitchless, injection-free)",
    candidateProfile: "Individuals with hazy, blurred, yellowed, or glare-sensitive sight caused by lens cataract opacification.",
    highlights: [
      "100% stitchless, injection-free, needle-free day-care surgery",
      "Premium Trifocal & Multifocal lenses correcting reading and distance",
      "Toric IOLs eliminating pre-existing corneal astigmatism",
      "Safe and proven for diabetic, cardiac, and elderly patients"
    ],
    clinicalSteps: [
      "Swept-source IOLMaster 700 optical biometry for exact lens power",
      "Sub-2.2mm self-sealing corneal micro-incision",
      "Capsulorhexis and ultrasonic phacoemulsification of clouded cataract",
      "Injection of foldable premium intraocular lens inside the capsular bag",
      "Hydration of incision with zero sutures required and same-day discharge"
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "glaucoma",
    title: "Glaucoma Early Detection & Micro-Surgery",
    urduTitle: "کالا موتیا کا علاج (Glaucoma)",
    category: "glaucoma",
    categoryLabel: "Glaucoma Specialty",
    shortDesc: "Preserving optic nerve health through computerized visual field perimetry, Selective Laser Trabeculoplasty (SLT), and augmented trabeculectomy.",
    fullDesc: "Often termed the 'silent thief of sight', glaucoma damages the optic nerve without early pain. Our glaucoma clinic provides computerized Humphrey visual field perimetry, OCT retinal nerve fiber layer (RNFL) mapping, cold SLT laser to lower intraocular pressure, and augmented trabeculectomy with antimetabolites or Ahmed glaucoma valve shunts.",
    technology: "Lumenis Selecta II SLT Laser & Humphrey Visual Field HFA3",
    procedureTime: "10 minutes (SLT laser) to 40 minutes (filtering surgery)",
    recoveryTime: "Immediate for laser; 1-2 weeks for filtering surgery",
    anesthesia: "Topical eye drops (laser) or monitored local anesthesia (surgery)",
    candidateProfile: "Patients with elevated eye pressure (IOP), positive family history of glaucoma, or optic disc cupping.",
    highlights: [
      "Cold-laser SLT reducing dependence on expensive daily eye drops",
      "Computerized Humphrey automated visual field analysis",
      "Mitomycin-C augmented trabeculectomy for resistant cases",
      "Lifelong progression monitoring preventing irreversible blindness"
    ],
    clinicalSteps: [
      "Goldmann applanation tonometry and corneal pachymetry",
      "Humphrey 24-2 / 30-2 computerized visual field testing",
      "High-definition OCT analysis of the retinal nerve fiber layer (RNFL)",
      "Targeted SLT laser trabeculoplasty or micro-surgical filtration",
      "Customized pressure-lowering maintenance program"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "retina",
    title: "Retina & Vitreous Micro-Surgery",
    urduTitle: "پردہ بصارت کا علاج (Retina & Vitreous)",
    category: "retina",
    categoryLabel: "Retina & Vitreous",
    shortDesc: "Advanced 25G/27G sutureless vitrectomy for complex vitreoretinal disorders, macular holes, epiretinal membranes, and vitreous hemorrhages.",
    fullDesc: "Headed by senior vitreoretinal surgeons, our posterior segment theater is outfitted with the Alcon Constellation 10,000 cuts/min vitrectomy system and non-contact Zeiss Resight viewing. We manage complex macular holes, vitreous hemorrhage, epiretinal membranes, and foreign body extractions with microscopic precision.",
    technology: "Alcon Constellation 10,000 cpm & Zeiss Resight 700",
    procedureTime: "45 - 75 minutes",
    recoveryTime: "1 to 3 weeks with specific posturing if gas bubble used",
    anesthesia: "Monitored local or general anesthesia",
    candidateProfile: "Individuals experiencing sudden visual distortion, dark curtains, wavy lines, floaters, or bleeding in the eye.",
    highlights: [
      "Micro-cannular 25G / 27G stitchless vitrectomy system",
      "Endo-laser photocoagulation and internal limiting membrane (ILM) peeling",
      "Wide-angle non-contact stereoscopic visualization",
      "High rate of macular hole closure and visual rehabilitation"
    ],
    clinicalSteps: [
      "Spectral-Domain OCT diagnostic scanning of retinal layers",
      "Insertion of microscopic 25G transconjunctival trocars",
      "Aspiration and clearance of vitreous gel and tractional bands",
      "Micro-forceps membrane peeling and endolaser application",
      "Internal gas (C3F8/SF6) or medical silicone oil tamponade"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "retinal-detachment",
    title: "Retinal Detachment Emergency Surgery",
    urduTitle: "پردہ بصارت کا ادھڑنا (Retinal Detachment)",
    category: "retina",
    categoryLabel: "Emergency Vitreoretinal",
    shortDesc: "Emergency sight-saving reattachment surgery utilizing 25G pars plana vitrectomy, scleral buckle, pneumatic retinopexy, and endotamponade.",
    fullDesc: "Retinal detachment is an acute ocular emergency where the neurosensory retina peels away from underlying choroidal blood supply. Led by Prof. Dr. Shahid Nazeer, our emergency surgical theater offers urgent reattachment using 25G vitrectomy, scleral buckling, cryopexy, endolaser barrier photocoagulation, and gas/silicone oil tamponade to prevent irreversible sight loss.",
    technology: "Constellation Vitrectomy Suite, Cryopexy & Purepoint Green Endo-Laser",
    procedureTime: "60 - 90 minutes",
    recoveryTime: "Gradual stabilization over 2 to 6 weeks with head positioning",
    anesthesia: "Monitored peribulbar block or general anesthesia",
    candidateProfile: "Patients presenting with sudden flashes of light, showers of black spots, or a dark shadow covering peripheral/central vision.",
    highlights: [
      "Urgent same-day emergency surgical intake protocol",
      "25G sutureless vitrectomy eliminating surgical trauma",
      "High primary anatomical reattachment success rate",
      "Long-term retinal barrier laser to prevent contralateral tears"
    ],
    clinicalSteps: [
      "Urgent dilated 360-degree fundus examination and B-scan ultrasonography",
      "Creation of micro-trocar entry ports and complete vitreous shaving",
      "Fluid-air exchange with internal drainage of subretinal fluid",
      "Endolaser or transscleral cryopexy around all retinal tears",
      "Silicone oil or long-acting gas injection to seal the retina in place"
    ],
    imageUrl: retinaSurgeryImg
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy & Anti-VEGF Therapy",
    urduTitle: "شوگر کے اثرات برائے بینائی (Diabetic Retinopathy)",
    category: "retina",
    categoryLabel: "Diabetic Eye Care",
    shortDesc: "Targeted Anti-VEGF injections (Eylea, Lucentis, Avastin) and Argon green laser photocoagulation to halt diabetic vascular leakage.",
    fullDesc: "Diabetes causes fragile, leaky micro-vessels in the retina leading to diabetic macular edema (DME) and proliferative retinopathy. Our comprehensive diabetic eye service utilizes Swept-Source OCT and fundus fluorescein angiography (FFA) to guide precise Anti-VEGF pharmacological injections and pan-retinal photocoagulation (PRP) laser, safeguarding vision.",
    technology: "Argon Purepoint Green Laser & Cirrus HD-OCT",
    procedureTime: "10 - 20 minutes",
    recoveryTime: "Same-day discharge with normal routine resume next morning",
    anesthesia: "Topical anesthetic eye drops",
    candidateProfile: "Diabetic patients with blurry vision, fluctuating clarity, microaneurysms, or retinal hemorrhages.",
    highlights: [
      "Intravitreal Anti-VEGF injections reducing macular swelling rapidly",
      "Pattern scan green laser minimizing discomfort during PRP",
      "Comprehensive systemic diabetic counseling and glucose coordination",
      "Routine annual screening preventing sudden diabetic vitreous hemorrhage"
    ],
    clinicalSteps: [
      "Non-mydriatic high-resolution fundus photography & OCT central thickness",
      "Sterile ophthalmic prep and topical drop anesthesia",
      "Painless micro-needle intravitreal injection of Anti-VEGF medication",
      "Pattern laser photocoagulation for proliferative neovascular vessels",
      "Monthly OCT tracking until macular swelling is completely resolved"
    ],
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "keratoconus",
    title: "Keratoconus Customized Treatment CXL to CAIRS",
    urduTitle: "کیراٹوکونس کا علاج (Customized CXL to CAIRS)",
    category: "cornea",
    categoryLabel: "Corneal Ectasia",
    shortDesc: "Halting progressive corneal thinning and reshaping corneal architecture using customized treatment protocols from CXL to CAIRS.",
    fullDesc: "Keratoconus is a progressive condition where the cornea thins and bulges into an irregular cone shape. Our specialized cornea unit utilizes customized protocols ranging from Accelerated Riboflavin Corneal Cross-Linking (CXL) to CAIRS (Corneal Allogenic Intrastromal Ring Segments) and topo-guided treatments to stabilize biomechanical integrity, flatten the cone, and restore functional visual acuity.",
    technology: "Avedro KXL UV Cross-Linking System, Femtosecond Laser CAIRS & Oculus Pentacam HR",
    procedureTime: "30 - 45 minutes",
    recoveryTime: "Rapid healing with long-term corneal stabilization and flattening",
    anesthesia: "Topical anesthetic drops",
    candidateProfile: "Patients with early to advanced keratoconus, worsening irregular astigmatism, or progressive corneal ectasia.",
    highlights: [
      "Customized patient-tailored protocol from CXL to CAIRS",
      "CAIRS: Biocompatible allogenic intrastromal tissue segments for natural corneal flattening",
      "Accelerated Riboflavin-UVA photopolymerization halting thinning progression",
      "Prevents invasive full-thickness penetrating keratoplasty",
      "Specialty contact lens fitting clinic (Rose K & Scleral lenses)"
    ],
    clinicalSteps: [
      "Pentacam Belin-Ambrósio enhanced ectasia progression analysis",
      "Soaking the corneal stroma with pharmaceutical Riboflavin (Vitamin B2)",
      "Controlled UVA light irradiation to induce collagen cross-links",
      "Placement of a protective therapeutic bandage contact lens (BCL)",
      "Follow-up topography confirming stabilization of corneal curvature"
    ],
    imageUrl: cxlKeratoconusImg
  },
  {
    id: "icl-lenses",
    title: "ICL (Implantable Collamer Lenses)",
    urduTitle: "آئی سی ایل لینز (Implantable Collamer Lenses)",
    category: "refractive",
    categoryLabel: "Phakic Lens Implants",
    shortDesc: "Reversible, HD visual correction for extreme myopia, thin corneas, or dry eye patients who are unsuitable for laser LASIK.",
    fullDesc: "Implantable Collamer Lenses (EVO Visian ICL) represent the pinnacle of high-definition vision correction for patients who cannot undergo LASIK due to thin corneas, high refractive errors (up to -20D), or severe dry eye. The biocompatible Collamer lens is gently placed behind the iris and in front of the natural lens, preserving corneal architecture completely and remaining 100% removable.",
    technology: "STAAR Surgical EVO+ Visian ICL & UBM Anterior Chamber Biometry",
    procedureTime: "15 minutes per eye",
    recoveryTime: "Instant visual HD upgrade within 12 - 24 hours",
    anesthesia: "Topical anesthetic eye drops (painless and stitch-free)",
    candidateProfile: "Ages 21-45 with moderate to high myopia (-3.00D to -20.00D) or astigmatism, with thin corneas or dry eyes.",
    highlights: [
      "Zero removal of natural corneal tissue; 100% reversible",
      "Superb high-definition night vision with zero dry eye induction",
      "Built-in ultraviolet (UV) protection filter",
      "Approved for individuals declared ineligible for LASIK"
    ],
    clinicalSteps: [
      "Ultra-sound biomicroscopy (UBM) measuring anterior chamber depth & sulcus size",
      "Custom ordering of personalized Swiss/US manufactured Collamer lens",
      "Microscopic 2.8mm entry under topical drop anesthesia",
      "Injection and unfolding of ICL into the posterior chamber behind the iris",
      "Rapid visual clarity check with immediate post-op release"
    ],
    imageUrl: iclLensImplantImg
  },
  {
    id: "dcr-surgery",
    title: "DCR (Dacryocystorhinostomy) - Tear Duct Surgery",
    urduTitle: "آنکھ کی نالی کا آپریشن (DCR Surgery)",
    category: "oculoplastic",
    categoryLabel: "Lacrimal & Tear Duct",
    shortDesc: "Endoscopic and micro-surgical tear duct bypass creating a new drainage channel to cure persistent watering eyes (epiphora) and infection.",
    fullDesc: "Chronic watering, discharge, and painful swelling at the inner corner of the eye are classic signs of nasolacrimal duct obstruction and dacryocystitis. Our oculoplastic surgeons perform both Endoscopic (scarless through the nose) and External DCR surgeries with silicone stent intubation, permanently restoring natural tear drainage without facial scarring.",
    technology: "Karl Storz HD Endoscopic Tower & Micro-Lacrimal Drills",
    procedureTime: "35 - 50 minutes",
    recoveryTime: "5 - 7 days; immediate relief from chronic overflow tearing",
    anesthesia: "Local anesthesia with light sedation or general anesthesia",
    candidateProfile: "Patients suffering constant tearing (epiphora), recurrent sticky discharge, or painful inner-corner eye swelling.",
    highlights: [
      "Scarless endonasal endoscopic approach option available",
      "Permanent cure for chronic watery eyes and dacryocystitis",
      "Silicone Crawford intubation stent for flawless channel patency",
      "Day-care surgery with minimal post-operative downtime"
    ],
    clinicalSteps: [
      "Diagnostic lacrimal syringing and probing to locate obstruction",
      "Creation of an ostium bypass between lacrimal sac and nasal cavity",
      "Placement of a soft silicone stent to maintain the new drainage passage",
      "Careful mucosal flap suturing with micro-hemostasis",
      "Painless outpatient stent removal at 6-8 weeks follow-up"
    ],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "squint-surgery",
    title: "Squint Surgery & Strabismus Realignment",
    urduTitle: "بھینگا پن کا علاج (Squint & Strabismus)",
    category: "pediatric",
    categoryLabel: "Pediatric & Strabismus",
    shortDesc: "Precision micro-surgical extraocular muscle realignment for children and adults to restore straight eye alignment and binocular 3D vision.",
    fullDesc: "Squint (strabismus or crossed eyes) can affect both infants and adults, leading to lazy eye (amblyopia), loss of 3D depth perception, and cosmetic distress. Our strabismus surgical faculty performs delicate muscle recession and resection using adjustable sutures, restoring perfect cosmetic symmetry and binocular single vision in a gentle clinical setting.",
    technology: "PlusoptiX Digital Vision Screener & Micro-Muscular Sets",
    procedureTime: "30 - 60 minutes",
    recoveryTime: "Resumption of normal activities in 48 to 72 hours",
    anesthesia: "Pediatric general anesthesia or local anesthesia in cooperative adults",
    candidateProfile: "Children or adults with inward (esotropia) or outward (exotropia) eye turning, double vision, or abnormal head posture.",
    highlights: [
      "Restores normal binocular stereoscopic depth perception",
      "Adjustable suture techniques for millimeter-level ocular alignment",
      "Comprehensive amblyopia patching and visual therapy integration",
      "Safe, caring theater environment with dedicated pediatric anesthesiologists"
    ],
    clinicalSteps: [
      "Prism cover testing and cycloplegic refraction measurement",
      "Micro-conjunctival incision under gentle anesthesia",
      "Precise identification and measurement of target extraocular muscles",
      "Millimeter recession (loosening) or resection (tightening) of muscles",
      "Rapid post-operative visual recovery and binocular alignment exercises"
    ],
    imageUrl: pediatricSquintImg
  },
  {
    id: "stem-cell-transplant",
    title: "Stem Cell Transplant (Limbal Stem Cell Grafting)",
    urduTitle: "آنکھ کی سٹیم سیل پیوند کاری (Stem Cell Transplant)",
    category: "cornea",
    categoryLabel: "Ocular Surface Regeneration",
    shortDesc: "Cultivated Limbal Stem Cell Transplantation (LSCT) and amniotic membrane grafting for severe ocular surface burns, trauma, and chemical injury.",
    fullDesc: "When the limbus is destroyed by chemical burns, Stevens-Johnson syndrome, or recurrent ocular surface trauma, the cornea loses clarity and becomes vascularized. Nazeer Eye Care is among the elite institutes offering autologous or allogeneic Limbal Stem Cell Transplantation (LSCT) paired with human Amniotic Membrane Grafting (AMG) to regenerate the ocular surface before corneal transplantation.",
    technology: "Cryo-preserved Amniotic Membrane & Micro-Surgical Bio-Tissue Suite",
    procedureTime: "45 - 75 minutes",
    recoveryTime: "Gradual surface epithelialization over 2 to 4 weeks",
    anesthesia: "Monitored local or general anesthesia",
    candidateProfile: "Patients with chemical burns, thermal injuries, pterygium recurrence, or total limbal stem cell deficiency (LSCD).",
    highlights: [
      "Pioneering biological regenerative ocular surface reconstruction",
      "Fibrin glue sutureless amniotic membrane graft integration",
      "Restores transparency and prevents persistent corneal ulcers",
      "Crucial preparatory step to ensure success of future corneal transplants"
    ],
    clinicalSteps: [
      "Complete anterior ocular surface and limbal margin mapping",
      "Excision of fibrovascular pannus and scarred conjunctiva from cornea",
      "Harvesting and micro-placement of healthy limbal stem cell tissue (SLET/CLAU)",
      "Secure fixation with biological fibrin glue and amniotic membrane overlay",
      "Topical autologous serum tears and high-purity lubricant recovery protocol"
    ],
    imageUrl: stemCellGraftImg
  },
  {
    id: "dry-eye-ocular-surface",
    title: "Dry Eye & Ocular Surface Health",
    urduTitle: "آنکھوں کی خشکی و بیرونی صحت (Dry Eye & Ocular Health)",
    category: "ocular-surface",
    categoryLabel: "Ocular Surface Health",
    shortDesc: "Comprehensive diagnostic tear analysis, Meibomian Gland Dysfunction (MGD) thermal expression, Intense Pulsed Light (IPL), and punctal plugs.",
    fullDesc: "Chronic dry eye is a complex inflammatory disease causing burning, stinging, redness, foreign body sensation, and blurred vision. Our Ocular Surface Health Clinic utilizes non-invasive tear film breakup time (NIBUT), infrared meibography, punctal occlusion plugs, and micro-thermal expression to restore natural tear lipid stability and relieve digital screen strain.",
    technology: "Ocular Surface Tomographer, Meibography & Punctal Occlusion",
    procedureTime: "15 - 30 minutes in clinic",
    recoveryTime: "Immediate soothing comfort with progressive long-term relief",
    anesthesia: "Topical drop anesthesia (zero pain)",
    candidateProfile: "Individuals suffering eye redness, grit, stinging, burning, screen fatigue, or excessive reflex watering.",
    highlights: [
      "Accurate diagnostic differentiation of evaporative vs. aqueous deficiency",
      "Silicone punctal plugs keeping natural tears on the eye surface",
      "Specialized Meibomian Gland thermal clearance for blocked oil glands",
      "Preservative-free tear substitutes and autologous serum eye drops"
    ],
    clinicalSteps: [
      "Non-contact tear osmolarity and infrared meibomian gland imaging",
      "Schirmer tear production quantification and corneal fluorescein staining",
      "In-office thermal expression of clogged meibomian glands",
      "Painless insertion of micro punctal occlusion plugs if indicated",
      "Tailored ocular surface home maintenance and anti-inflammatory regimen"
    ],
    imageUrl: dryEyeTreatmentImg
  }
];

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: "prof-shahid-nazeer",
    name: "Prof. Dr. Shahid Nazeer",
    designation: "Chief Consultant Ophthalmologist & Head of Department | Senior Professor",
    credentials: ["MBBS", "MCPS (Ophthalmology)", "FRCS (Ophthalmology)"],
    specialty: "Advanced Vitreoretinal, Corneal Transplants & Refractive Surgery",
    subSpecialties: [
      "Corneal Transplants & Keratoconus (CXL)",
      "Glasses Removal (Femto LASIK / PRK / ICL)",
      "Retinal Detachment & 25G Vitrectomy",
      "Diabetic Retinopathy & Micro-Phaco Cataract"
    ],
    experienceYears: 26,
    surgeriesCompleted: "31,000+",
    bio: "Professor Dr. Shahid Nazeer is the revered Chief Medical Director, Head of Ophthalmology, and Senior Professor at Nazeer Eye Care, Lions Medical Complex. Holding the world's most prestigious ophthalmic qualifications—including FRCS (Fellow of Royal College of Surgeons), MCPS, and MBBS—Prof. Dr. Shahid Nazeer is celebrated nationally and internationally for over 26 years of surgical excellence. He has pioneered sight-restoring corneal transplants, complex retinal detachment surgeries, stitchless micro-phacoemulsification, and laser glasses removal, restoring visual clarity to tens of thousands of patients.",
    education: [
      "FRCS in Ophthalmology, Royal College of Physicians and Surgeons",
      "MCPS in Ophthalmology, College of Physicians and Surgeons Pakistan",
      "MBBS with Honors and Clinical Distinctions",
      "Advanced International Fellowships in Cornea, Retinal Surgery & Refractive Lasers"
    ],
    memberships: [
      "Fellow, Royal College of Physicians & Surgeons (FRCS)",
      "Member, College of Physicians & Surgeons Pakistan (MCPS)",
      "Ophthalmological Society of Pakistan (OSP) - Senior Council",
      "American Academy of Ophthalmology (AAO)",
      "European Society of Cataract & Refractive Surgeons (ESCRS)"
    ],
    consultationDays: "Monday to Thursday & Saturday (Friday & Sunday OFF)",
    consultationTimings: "2:00 PM – 5:00 PM (Can visit between 2pm to 5pm, examination will be on your turn)",
    imageUrl: drShahidPortraitImg,
    isChief: true
  },
  {
    id: "dr-amjad-ali",
    name: "Dr. Amjad Ali",
    designation: "Senior Consultant Ophthalmologist & Corneal Surgeon",
    credentials: ["MBBS", "DOMS (Ophthalmology)", "Fellowship Corneal Grafting"],
    specialty: "Corneal Transplants & Advanced Cataract",
    subSpecialties: ["Corneal Grafting (PKP / Lamellar)", "Keratoconus Management", "Complex Phacoemulsification", "Glaucoma Care"],
    experienceYears: 49,
    surgeriesCompleted: "45,000+",
    bio: "Dr. Amjad Ali is the revered pioneer of corneal grafting at Lions Medical Complex, having spearheaded Lahore's landmark eye-banking and transplant partnership with the International Eye Bank since 1995. Over nearly five decades of distinguished clinical practice, he has restored vision for thousands of blind and corneal-damaged patients.",
    education: [
      "Diploma in Ophthalmic Medicine & Surgery (DOMS)",
      "Corneal Grafting & Keratoplasty Training with Sri Lanka International Eye Bank",
      "MBBS, King Edward Medical College, Lahore"
    ],
    memberships: [
      "Ophthalmological Society of Pakistan (OSP)",
      "International Association of Eye Banks (IAEB)",
      "Cornea Society of Pakistan"
    ],
    consultationDays: "Monday, Wednesday, Friday, Saturday",
    consultationTimings: "8:30 AM – 12:30 PM (OPD before 11 AM)",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-qamar-ul-islam",
    name: "Dr. Qamar Ul Islam",
    designation: "Consultant Eye Specialist & Phaco Refractive Surgeon",
    credentials: ["MBBS", "FCPS (Ophthalmology)", "Fellow International Council of Ophthalmology (FICO)"],
    specialty: "Micro-Incision Phaco & Refractive Laser",
    subSpecialties: ["Stitchless Cataract Surgery", "Premium Toric & Multifocal IOLs", "Diabetic Eye Screening", "Anterior Segment Laser"],
    experienceYears: 30,
    surgeriesCompleted: "32,000+",
    bio: "Dr. Qamar Ul Islam brings three decades of surgical mastery in micro-incision sutureless cataract surgery and anterior segment care. He is recognized for exceptional surgical precision and patient-centered clinical counseling.",
    education: [
      "FCPS in Ophthalmology, College of Physicians & Surgeons Pakistan",
      "Fellow of International Council of Ophthalmology (FICO)",
      "MBBS, Allama Iqbal Medical College"
    ],
    memberships: [
      "Ophthalmological Society of Pakistan (OSP)",
      "American Academy of Ophthalmology (AAO)",
      "European Society of Cataract and Refractive Surgeons (ESCRS)"
    ],
    consultationDays: "Tuesday, Thursday, Saturday",
    consultationTimings: "8:30 AM – 1:00 PM (OPD before 11 AM)",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-sumaira-asad",
    name: "Dr. Sumaira Asad",
    designation: "Consultant Ophthalmologist & Glaucoma Specialist",
    credentials: ["MBBS", "FCPS (Ophthalmology)", "Fellow Anterior Segment & Glaucoma"],
    specialty: "Glaucoma Diagnostic Perimetry & Surgery",
    subSpecialties: ["Selective Laser Trabeculoplasty (SLT)", "Trabeculectomy with Antimetabolites", "Automated Perimetry", "OCT RNFL Analysis"],
    experienceYears: 15,
    surgeriesCompleted: "14,000+",
    bio: "Dr. Sumaira Asad is a dedicated glaucoma authority specializing in early optic nerve preservation, computerized visual field evaluations, and customized surgical filtration for uncontrolled intraocular pressure.",
    education: [
      "FCPS in Ophthalmology, CPSP",
      "Specialized Fellowship in Glaucoma & Anterior Segment",
      "MBBS, Fatima Jinnah Medical University"
    ],
    memberships: [
      "Pakistan Glaucoma Association (PGA)",
      "Ophthalmological Society of Pakistan",
      "World Glaucoma Association"
    ],
    consultationDays: "Monday, Tuesday, Thursday",
    consultationTimings: "9:00 AM – 1:30 PM",
    imageUrl: drSumairaAsadImg
  },
  {
    id: "dr-anum-arshad",
    name: "Dr. Anum Arshad",
    designation: "Consultant Pediatric Ophthalmologist & Strabismus Specialist",
    credentials: ["MBBS", "FCPS (Ophthalmology)", "Fellowship Pediatric Ophthalmology & Strabismus"],
    specialty: "Pediatric Vision, Amblyopia & Squint Alignment",
    subSpecialties: ["Childhood Refraction & Vision Screening", "Squint Alignment Surgery", "Lazy Eye (Amblyopia) Therapy", "Allergic Eye Disease in Children"],
    experienceYears: 10,
    surgeriesCompleted: "8,500+",
    bio: "Dr. Anum Arshad specializes in comprehensive visual screening and gentle pediatric ocular care for infants and schoolchildren. She is renowned for her caring clinical approach and successful ocular muscle alignment surgeries.",
    education: [
      "FCPS in Ophthalmology, College of Physicians & Surgeons Pakistan",
      "Pediatric Ophthalmology & Strabismus Fellowship",
      "MBBS with Clinical Distinctions"
    ],
    memberships: [
      "Pakistan Pediatric Ophthalmology Society",
      "International Strabismological Association (ISA)",
      "OSP Lahore Chapter"
    ],
    consultationDays: "Wednesday, Friday, Saturday",
    consultationTimings: "8:30 AM – 12:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prof-mian-shafique",
    name: "Prof. Dr. Mian Muhammad Shafique",
    designation: "Senior Chief Consultant Vitreoretinal Surgeon",
    credentials: ["MBBS", "FCPS (Ophthalmology)", "FRCS (Glasgow, UK)", "Fellow Vitreo-Retina"],
    specialty: "Vitreoretinal Surgery & Complex Retinopathy",
    subSpecialties: ["Diabetic Retinopathy", "Retinal Detachment", "Macular Surgery", "25G Sutureless Vitrectomy"],
    experienceYears: 32,
    surgeriesCompleted: "35,000+",
    bio: "Prof. Dr. Mian Muhammad Shafique is one of Pakistan's most revered vitreoretinal authorities, providing advanced micro-cannular vitrectomy and laser photocoagulation for complex retinal detachments and diabetic complications.",
    education: [
      "Fellow of Royal College of Physicians & Surgeons, Glasgow",
      "FCPS in Ophthalmology, College of Physicians & Surgeons Pakistan",
      "MBBS with Honors, King Edward Medical University"
    ],
    memberships: [
      "Ophthalmological Society of Pakistan (OSP) - Past President",
      "Vitreoretinal Society of Pakistan (VRSP)",
      "American Academy of Ophthalmology (AAO)"
    ],
    consultationDays: "Monday, Wednesday, Friday",
    consultationTimings: "10:00 AM – 1:30 PM",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-mushtaq-qureshi",
    name: "Dr. Mushtaq Ahmad Qureshi",
    designation: "Consultant Refractive Surgeon & Cornea Specialist",
    credentials: ["MBBS", "MCPS (Ophth)", "FCPS (Ophthalmology)", "Cornea & Refractive Fellowship"],
    specialty: "Laser Vision Correction & Micro-Phaco",
    subSpecialties: ["Schwind 750Hz Excimer Laser", "Femtosecond Cataract", "Customized CXL to CAIRS", "Toric IOLs"],
    experienceYears: 26,
    surgeriesCompleted: "28,000+",
    bio: "Dr. Mushtaq Ahmad Qureshi brings over two decades of surgical mastery in laser refractive correction and custom lens replacement, guiding thousands to spectacle independence.",
    education: [
      "Fellowship in Cornea & Refractive Surgery",
      "FCPS in Ophthalmology",
      "MBBS, Allama Iqbal Medical College"
    ],
    memberships: [
      "European Society of Cataract & Refractive Surgeons (ESCRS)",
      "International Society of Refractive Surgery (ISRS)",
      "Ophthalmological Society of Pakistan"
    ],
    consultationDays: "Tuesday, Thursday, Saturday",
    consultationTimings: "9:00 AM – 1:30 PM",
    imageUrl: drMushtaqQureshiImg
  },
  {
    id: "dr-qasim-chaudhry",
    name: "Dr. Qasim Lateef Chaudhry",
    designation: "Consultant Vitreoretinal & Refractive Surgeon",
    credentials: ["MBBS", "FCPS (Ophth)", "FRCS (Edin)", "Fellowship Vitreo-Retina"],
    specialty: "Retinal Micro-Surgery & Femto Laser",
    subSpecialties: ["25G Sutureless Vitrectomy", "Laser Retinopathy Treatment", "Custom LASIK", "Intraocular Lens Implantation"],
    experienceYears: 18,
    surgeriesCompleted: "16,000+",
    bio: "Dr. Qasim Lateef Chaudhry represents the next generation of academic ophthalmic surgeons, with international training in Edinburgh and extensive clinical research in micro-incision vitrectomy and advanced laser refraction.",
    education: [
      "FRCS (Ophthalmology), Royal College of Surgeons of Edinburgh",
      "FCPS Ophthalmology",
      "MBBS, King Edward Medical University"
    ],
    memberships: [
      "Royal College of Surgeons of Edinburgh (RCSEd)",
      "American Society of Retina Specialists (ASRS)",
      "OSP Lahore Chapter"
    ],
    consultationDays: "Wednesday, Friday, Saturday",
    consultationTimings: "2:00 PM – 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-sofia-chaudhry",
    name: "Dr. Sofia Lateef Chaudhry",
    designation: "Consultant Pediatric Ophthalmologist & Strabismus Surgeon",
    credentials: ["MBBS", "FCPS (Ophth)", "Fellowship Pediatric Ophthalmology & Strabismus"],
    specialty: "Pediatric Eye Diseases & Squint Correction",
    subSpecialties: ["Pediatric Cataract", "Amblyopia Visual Training", "Adult Strabismus", "Nasolacrimal Duct Obstruction"],
    experienceYears: 16,
    surgeriesCompleted: "12,000+",
    bio: "Dr. Sofia Lateef Chaudhry has dedicated her surgical career to pediatric visual rehabilitation and ocular motility. Renowned for her gentle clinical manner with children and precise micro-muscle alignment.",
    education: [
      "Fellowship in Pediatric Ophthalmology, The Children's Hospital",
      "FCPS in Ophthalmology, CPSP",
      "MBBS, Fatima Jinnah Medical University"
    ],
    memberships: [
      "International Strabismological Association (ISA)",
      "AAPOS - International Member",
      "Pakistan Pediatric Ophthalmology Group"
    ],
    consultationDays: "Monday, Thursday, Saturday",
    consultationTimings: "11:00 AM – 3:30 PM",
    imageUrl: drSofiaChaudhryImg
  },
  {
    id: "dr-sabrina-sharif",
    name: "Dr. Sabrina Sharif",
    designation: "Consultant Oculoplastic & Reconstructive Surgeon",
    credentials: ["MBBS", "FCPS (Ophth)", "Fellowship Oculoplastics & Orbit (UK)"],
    specialty: "Oculoplastics, Aesthetic Eyelids & Orbit",
    subSpecialties: ["Blepharoplasty", "Ptosis Correction", "Endoscopic DCR", "Orbital Tumors & Trauma"],
    experienceYears: 15,
    surgeriesCompleted: "9,500+",
    bio: "Dr. Sabrina Sharif specializes in cosmetic and reconstructive surgery around the eyes. Her practice balances structural ophthalmic preservation with subtle aesthetic harmony and minimal downtime.",
    education: [
      "Advanced Fellowship in Ophthalmic Plastic Surgery, Moorfields Alumni Network",
      "FCPS Ophthalmology",
      "MBBS, King Edward Medical University"
    ],
    memberships: [
      "British Oculoplastic Surgery Society (BOPSS) - Affiliate",
      "European Society of Ophthalmic Plastic and Reconstructive Surgery (ESOPRS)",
      "OSP Oculoplastics Forum"
    ],
    consultationDays: "Tuesday, Friday",
    consultationTimings: "1:00 PM – 5:00 PM",
    imageUrl: drSabrinaSharifImg
  }
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    id: "schwind-amaris",
    name: "Schwind Amaris 750 Hz Excimer",
    origin: "Kleinostheim, Germany",
    role: "Refractive Laser Ablation",
    description: "The gold standard in laser vision correction, operating at 750 Hz with 7-dimensional eye tracking and automatic fluence level adjustment.",
    specs: ["750 Hz Pulse Frequency", "7D Dynamic Eyetracker", "0.54 mm Super-Gaussian Spot", "Intelligent Thermal Effect Control"],
    badge: "German Precision",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "alcon-constellation",
    name: "Alcon Constellation Vitrectomy Vision System",
    origin: "Fort Worth, Texas, USA",
    role: "Posterior Segment Vitreoretinal",
    description: "High-speed 10,000 cuts-per-minute dual-pneumatic probe technology with active intraocular pressure control, delivering unmatched vitreous shaving safety.",
    specs: ["10,000 cpm Cut Rate", "Non-Invasive 25G/27G Trocar Systems", "Purepoint Green Endo-Laser Integration", "Automated Infusion Compensation"],
    badge: "Gold Standard Retina",
    imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "zeiss-lumera",
    name: "Zeiss OPMI Lumera 700 & Resight",
    origin: "Oberkochen, Germany",
    role: "Surgical Visualization",
    description: "World-class stereo optical clarity with patented SCI (Stereo Coaxial Illumination) that maintains red reflex even under extreme tilt.",
    specs: ["SCI Instant Red Reflex", "Integrated Intraoperative OCT Camera", "Apochromatic Optics", "Wide-Field Non-Contact Resight 700"],
    badge: "Zeiss Optics",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "oculus-pentacam",
    name: "Oculus Pentacam HR Wavefront Tomographer",
    origin: "Wetzlar, Germany",
    role: "Cornea & Keratoconus Tomography",
    description: "High-resolution rotating Scheimpflug camera capturing 138,000 true elevation points across the anterior and posterior corneal surfaces in seconds.",
    specs: ["1.45 Megapixel Scheimpflug Camera", "Full 3D Anterior Chamber Analysis", "Belin/Ambrósio Enhanced Ectasia Display", "Zernike Wavefront Calculations"],
    badge: "Tomographic Clarity",
    imageUrl: pentacamCorneaScanImg
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    patientName: "Kamran Shahzad",
    age: 34,
    profession: "Commercial Airline Pilot",
    procedure: "Schwind 750Hz Femto LASIK",
    surgeon: "Dr. Mushtaq Ahmad Qureshi",
    rating: 5,
    quote: "As a pilot, my vision is my career. The blade-free Femto LASIK at Nazeer Eye Care took 15 minutes. The very next morning at the post-op exam, my visual acuity tested at 20/15. The precision and clinical calm of the team was extraordinary.",
    outcome: "20/15 Crisp Vision Without Glasses",
    date: "March 2026"
  },
  {
    id: "t2",
    patientName: "Begum Nasreen Akhtar",
    age: 62,
    profession: "Retired Academic Administrator",
    procedure: "Bilateral Trifocal Cataract Surgery",
    surgeon: "Prof. Dr. Mian Muhammad Shafique",
    rating: 5,
    quote: "My cataract had made reading books and driving at dusk impossible. Prof. Shafique and his surgical theater team gave me new eyes. I can read fine print on my mobile and see the road clearly without wearing spectacles.",
    outcome: "Independence from distance & reading glasses",
    date: "February 2026"
  },
  {
    id: "t3",
    patientName: "Dr. Hamza Bilal",
    age: 29,
    profession: "Senior Software Architect",
    procedure: "Customized Treatment CXL to CAIRS for Keratoconus",
    surgeon: "Dr. Altaf Nadeem",
    rating: 5,
    quote: "Diagnosed with progressive keratoconus, I was terrified of losing my ability to code. Nazeer Eye Care's Pentacam diagnostic caught it in time, and the customized CXL to CAIRS treatment halted my progression immediately.",
    outcome: "Corneal curvature stabilized with 0 degradation",
    date: "January 2026"
  }
];

export const VISION_SIMULATION_MODES = [
  {
    id: 'myopia',
    name: 'Myopia (Nearsightedness)',
    description: 'Distance objects appear blurred while close-up items remain sharp. Corrected in seconds via Femto LASIK.',
    blurLevel: 'blur-md',
    contrast: 'contrast-90',
    overlay: null
  },
  {
    id: 'cataract',
    name: 'Cataract (Lens Clouding)',
    description: 'Clouded natural crystalline lens causes faded colors, halos around lights, and milky haze.',
    blurLevel: 'blur-[6px]',
    contrast: 'contrast-75 sepia-[0.35] brightness-90',
    overlay: 'bg-amber-100/25 backdrop-blur-[2px]'
  },
  {
    id: 'astigmatism',
    name: 'Astigmatism (Corneal Irregularity)',
    description: 'Uneven corneal curve stretches light rays, causing ghosting and double contours at all distances.',
    blurLevel: 'blur-[3px]',
    contrast: 'contrast-105',
    overlay: null
  },
  {
    id: 'diabetic-retinopathy',
    name: 'Diabetic Retinopathy',
    description: 'Microvascular bleeding in the retina creates dark floaters, blind spots, and distorted central vision.',
    blurLevel: 'blur-[2px]',
    contrast: 'brightness-90',
    overlay: 'scotoma-dots'
  }
];
