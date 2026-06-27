import {
  Sparkles,
  Stethoscope,
  Gem,
  Smile,
  Baby,
  Activity,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  priceFrom: string;
  duration: string;
  features: string[];
  accent: "brand" | "gold" | "teal";
};

export const services: Service[] = [
  {
    slug: "cosmetic-dentistry",
    icon: Gem,
    title: "Cosmetic Dentistry",
    short: "Veneers, bonding & full smile makeovers.",
    description:
      "Craft a flawless smile with hand-layered porcelain veneers, composite bonding, and bespoke smile design tailored to your facial harmony.",
    priceFrom: "$450",
    duration: "1–2 visits",
    features: ["Porcelain veneers", "Composite bonding", "Smile design", "Gum contouring"],
    accent: "gold",
  },
  {
    slug: "teeth-whitening",
    icon: Sparkles,
    title: "Teeth Whitening",
    short: "Up to 8 shades brighter in one visit.",
    description:
      "Professional in-office Zoom whitening and custom take-home kits that lift years of stains safely and predictably.",
    priceFrom: "$299",
    duration: "60 min",
    features: ["Zoom in-office", "Custom take-home trays", "Sensitivity-safe", "Lasts 12+ months"],
    accent: "brand",
  },
  {
    slug: "dental-implants",
    icon: Wrench,
    title: "Dental Implants",
    short: "Permanent, natural-looking tooth replacement.",
    description:
      "Single implants, All-on-4, and full-arch restoration using premium titanium fixtures and digital guided surgery for precision.",
    priceFrom: "$1,900",
    duration: "Multi-stage",
    features: ["Single & multi-tooth", "All-on-4 arches", "Guided surgery", "Lifetime durability"],
    accent: "teal",
  },
  {
    slug: "orthodontics",
    icon: Smile,
    title: "Invisible Aligners",
    short: "Straighten teeth discreetly with clear aligners.",
    description:
      "Invisalign and ClearCorrect clear aligner therapy, plus modern ceramic braces for children, teens, and adults.",
    priceFrom: "$3,200",
    duration: "6–18 months",
    features: ["Invisalign", "ClearCorrect", "Ceramic braces", "3D treatment preview"],
    accent: "brand",
  },
  {
    slug: "general-dentistry",
    icon: Stethoscope,
    title: "General Dentistry",
    short: "Checkups, cleanings & preventive care.",
    description:
      "Comprehensive exams, hygiene cleanings, fillings, and root canals delivered with a gentle, anxiety-free approach.",
    priceFrom: "$89",
    duration: "45 min",
    features: ["Exams & cleanings", "White fillings", "Root canals", "Digital X-rays"],
    accent: "teal",
  },
  {
    slug: "pediatric-dentistry",
    icon: Baby,
    title: "Pediatric Dentistry",
    short: "Gentle, fun care for little smiles.",
    description:
      "A kid-friendly environment with patient, kind dentists who make first visits joyful and build lifelong healthy habits.",
    priceFrom: "$79",
    duration: "30 min",
    features: ["Gentle checkups", "Sealants", "Fluoride", "Fun play zone"],
    accent: "gold",
  },
  {
    slug: "emergency-care",
    icon: Activity,
    title: "Emergency Dental",
    short: "Same-day relief for dental emergencies.",
    description:
      "Toothaches, broken teeth, and lost crowns handled fast. We reserve daily slots for urgent care — call us anytime.",
    priceFrom: "$120",
    duration: "Same day",
    features: ["Same-day slots", "Pain relief", "Trauma care", "After-hours line"],
    accent: "teal",
  },
  {
    slug: "protective-care",
    icon: ShieldCheck,
    title: "Protective Care",
    short: "Night guards & sports mouthguards.",
    description:
      "Custom-fit night guards for bruxism and professional sports mouthguards that protect your smile on and off the field.",
    priceFrom: "$189",
    duration: "2 visits",
    features: ["Night guards", "Sports guards", "Bite therapy", "Custom fit"],
    accent: "brand",
  },
];

export type Doctor = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  credentials: string[];
  experience: string;
  rating: number;
};

export const doctors: Doctor[] = [
  {
    id: "dr-elena-vasquez",
    name: "Dr. Elena Vasquez",
    role: "Founder & Lead Cosmetic Dentist",
    specialty: "Cosmetic & Restorative",
    image: "https://sfile.chatglm.cn/images-ppt/c411e4b63a2f.jpg",
    bio: "With 18+ years crafting celebrity smiles, Dr. Vasquez pioneered our signature Lumière Smile Design process, blending artistry with digital precision.",
    credentials: ["DDS, Harvard School of Dental Medicine", "AACD Accredited", "Fellow, ICOI"],
    experience: "18 yrs",
    rating: 4.9,
  },
  {
    id: "dr-marcus-chen",
    name: "Dr. Marcus Chen",
    role: "Implant & Oral Surgeon",
    specialty: "Implantology & Surgery",
    image: "https://sfile.chatglm.cn/images-ppt/8866d0332cc3.jpg",
    bio: "A board-certified oral surgeon specializing in full-arch implant reconstruction and computer-guided surgery with a 99.2% implant success rate.",
    credentials: ["DMD, UPenn", "Board-Certified Oral Surgery", "AAID Fellow"],
    experience: "15 yrs",
    rating: 4.9,
  },
  {
    id: "dr-sofia-rahman",
    name: "Dr. Sofia Rahman",
    role: "Orthodontist",
    specialty: "Invisalign & Braces",
    image: "https://sfile.chatglm.cn/images-ppt/b129899b3a9e.jpg",
    bio: "Diamond+ Invisalign provider treating over 2,000 aligner cases. Dr. Rahman loves transforming complex bites into confident smiles.",
    credentials: ["BDS, King's College London", "MS Orthodontics", "Invisalign Diamond+"],
    experience: "12 yrs",
    rating: 5.0,
  },
  {
    id: "dr-james-okonkwo",
    name: "Dr. James Okonkwo",
    role: "General & Family Dentist",
    specialty: "General & Preventive",
    image: "https://sfile.chatglm.cn/images-ppt/504bca4453a4.jpg",
    bio: "Known for his calm, gentle chairside manner, Dr. Okonkwo makes anxious patients feel at ease with pain-free, judgment-free care.",
    credentials: ["DDS, UCLA", "Sedation Dentistry Cert.", "ADA Member"],
    experience: "10 yrs",
    rating: 4.8,
  },
  {
    id: "dr-amelia-park",
    name: "Dr. Amelia Park",
    role: "Pediatric Dentist",
    specialty: "Children's Dentistry",
    image: "https://sfile.chatglm.cn/images-ppt/f6c7a15a7c04.jpeg",
    bio: "Kids adore Dr. Park's playful, storytelling approach. She's dedicated to building positive first dental experiences that last a lifetime.",
    credentials: ["DDS, UCSF", "Pediatric Residency", "AAPD Member"],
    experience: "9 yrs",
    rating: 5.0,
  },
  {
    id: "dr-liam-anderson",
    name: "Dr. Liam Anderson",
    role: "Endodontist",
    specialty: "Root Canals & Microsurgery",
    image: "https://sfile.chatglm.cn/images-ppt/f8e3a71c2678.jpg",
    bio: "A microscope-driven endodontist saving natural teeth with virtually painless root canals and microsurgical retreatments.",
    credentials: ["DDS, Columbia", "Endodontic Specialty", "AAE Active Member"],
    experience: "11 yrs",
    rating: 4.9,
  },
];

export type Testimonial = {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Olivia Bennett",
    treatment: "Porcelain Veneers",
    rating: 5,
    quote:
      "I've never felt camera-ready until now. Dr. Vasquez designed my veneers to look completely natural — people think I was born with this smile. Worth every penny.",
    avatar: "OB",
  },
  {
    id: "t2",
    name: "David Kim",
    treatment: "All-on-4 Implants",
    rating: 5,
    quote:
      "After years of hiding my teeth, Dr. Chen gave me a full set of implants in one day. The guided surgery was painless and the results are stunning. I cried happy tears.",
    avatar: "DK",
  },
  {
    id: "t3",
    name: "Priya Sharma",
    treatment: "Invisalign",
    rating: 5,
    quote:
      "Dr. Rahman is an Invisalign wizard. My case was complex but she mapped every move digitally so I always knew what to expect. Straight teeth in 9 months!",
    avatar: "PS",
  },
  {
    id: "t4",
    name: "Marcus Thompson",
    treatment: "Emergency Root Canal",
    rating: 5,
    quote:
      "Cracked a tooth on a Sunday. They got me in within the hour and Dr. Anderson fixed it with zero pain. The most calming dental experience I've ever had.",
    avatar: "MT",
  },
  {
    id: "t5",
    name: "Hannah Lee",
    treatment: "Zoom Whitening",
    rating: 5,
    quote:
      "Eight shades brighter in a single lunch break. The clinic feels more like a spa than a dentist's office. Coffee stains — completely gone.",
    avatar: "HL",
  },
  {
    id: "t6",
    name: "The Alvarez Family",
    treatment: "Pediatric Care",
    rating: 5,
    quote:
      "Our kids actually ask to go to the dentist now. Dr. Park turns checkups into adventures. The play zone and gentle approach are a parent's dream.",
    avatar: "AF",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential Care",
    price: "$29",
    period: "/month",
    description: "Everyday preventive care for a healthy smile.",
    features: [
      "2 exams & cleanings per year",
      "Digital X-rays annually",
      "20% off all treatments",
      "Priority emergency slots",
      "Oral cancer screening",
    ],
    cta: "Choose Essential",
  },
  {
    name: "Complete Smile",
    price: "$59",
    period: "/month",
    description: "Our most popular plan for total peace of mind.",
    features: [
      "Everything in Essential",
      "4 cleanings per year",
      "1 free whitening per year",
      "30% off all treatments",
      "Custom night guard included",
      "Free emergency visits",
    ],
    highlighted: true,
    cta: "Choose Complete",
  },
  {
    name: "Elite Dental",
    price: "$129",
    period: "/month",
    description: "Comprehensive coverage including cosmetic care.",
    features: [
      "Everything in Complete",
      "Unlimited cleanings",
      "2 whitening sessions / yr",
      "40% off cosmetic & implants",
      "Concierge scheduling",
      "Annual smile design review",
    ],
    cta: "Choose Elite",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Do you accept dental insurance?",
    a: "Yes. We're in-network with most major PPO insurers including Delta Dental, Cigna, Aetna, MetLife, and Guardian. We'll verify your benefits before any treatment and file claims on your behalf so there are no surprises.",
  },
  {
    q: "I have dental anxiety. How do you help nervous patients?",
    a: "You're not alone — over 60% of our patients once feared the dentist. We offer sedation options (nitrous, oral, and IV), noise-canceling headphones, weighted blankets, and a judgment-free, pace-controlled approach. Our team is specially trained in gentle dentistry.",
  },
  {
    q: "How long does a smile makeover take?",
    a: "A full smile makeover typically takes 2–4 visits over 3–6 weeks, depending on the combination of veneers, implants, or aligners. We begin with a complimentary consultation and 3D digital preview so you can see your new smile before we begin.",
  },
  {
    q: "Are dental implants painful?",
    a: "Most patients report minimal discomfort — often less than a simple extraction. We use computer-guided surgery for precision and offer multiple sedation levels. Dr. Chen's implant success rate is 99.2%, well above the national average.",
  },
  {
    q: "Do you see children and families?",
    a: "Absolutely. Dr. Amelia Park leads our pediatric team in a dedicated kid-friendly wing complete with a play zone. We see patients of all ages and offer family scheduling so everyone can be seen in a single visit.",
  },
  {
    q: "What if I have a dental emergency after hours?",
    a: "Call our main number anytime. Our after-hours line connects you to an on-call dentist, and we reserve same-day emergency slots every day for urgent issues like severe pain, broken teeth, or lost crowns.",
  },
  {
    q: "Do you offer financing or payment plans?",
    a: "Yes. We partner with CareCredit and Sunbit to offer 0% interest plans for 6–24 months on treatments over $300. We also have our in-house membership plans (shown above) for patients without insurance.",
  },
  {
    q: "How often should I get a dental checkup?",
    a: "For most patients, every 6 months is ideal. Patients with gum disease, implants, or ongoing treatment may need visits every 3–4 months. We'll recommend the right cadence based on your individual oral health.",
  },
];

export type Stat = {
  value: string;
  label: string;
  sublabel: string;
};

export const stats: Stat[] = [
  { value: "25K+", label: "Smiles transformed", sublabel: "since 2009" },
  { value: "4.9★", label: "Average rating", sublabel: "3,200+ reviews" },
  { value: "15+", label: "Years of excellence", sublabel: "award-winning" },
  { value: "99.2%", label: "Implant success", sublabel: "well above avg" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Pain-Free Promise",
    description:
      "Advanced numbing techniques and sedation options mean virtually painless treatment, every time.",
  },
  {
    icon: Gem,
    title: "Digital Smile Design",
    description:
      "See your new smile in 3D before we begin — no surprises, only beautiful, predictable results.",
  },
  {
    icon: Activity,
    title: "State-of-the-Art Tech",
    description:
      "3D CBCT imaging, intraoral scanners, and guided surgery for unmatched precision and comfort.",
  },
  {
    icon: Stethoscope,
    title: "Board-Certified Specialists",
    description:
      "Six in-house specialists under one roof — no referrals, no running across town.",
  },
  {
    icon: Sparkles,
    title: "Spa-Like Experience",
    description:
      "Aromatherapy, heated chairs, blankets, and a calming ambiance designed to melt anxiety away.",
  },
  {
    icon: Baby,
    title: "Gentle for All Ages",
    description:
      "From a toddler's first checkup to grandpa's implants, we care for every generation with kindness.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "We listen to your goals, examine your smile, and take digital scans — all in a relaxed, no-pressure setting.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "You receive a clear, custom treatment plan with a 3D preview of results and transparent, upfront pricing.",
    icon: Gem,
  },
  {
    step: "03",
    title: "Gentle Treatment",
    description: "Relax in our spa-style suites while our specialists deliver precise, comfortable care with sedation if desired.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Lasting Smile",
    description: "We protect your investment with personalized maintenance and lifetime follow-ups to keep your smile radiant.",
    icon: Smile,
  },
];

export const clinicInfo = {
  name: "Lumière Dental",
  tagline: "Where artistry meets dentistry",
  phone: "+1 (415) 555-0192",
  emergencyPhone: "+1 (415) 555-0911",
  email: "hello@lumieredental.com",
  address: "248 Marina Boulevard, Suite 500",
  city: "San Francisco, CA 94123",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Emergency only" },
  ],
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Doctors", href: "#doctors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export const heroImages = {
  primary: "https://sfile.chatglm.cn/images-ppt/b5f937df182e.jpg",
  secondary: "https://sfile.chatglm.cn/images-ppt/7f5e8ce8661f.jpg",
  treatment: "https://sfile.chatglm.cn/images-ppt/e2ed3375bfa2.jpg",
};

export const galleryImages = [
  { src: "https://sfile.chatglm.cn/images-ppt/36d007eeb226.jpg", alt: "Modern dental treatment suite", label: "Treatment Suites" },
  { src: "https://sfile.chatglm.cn/images-ppt/4fa11f8aab3e.jpg", alt: "Luxury clinic reception area", label: "Reception" },
  { src: "https://sfile.chatglm.cn/images-ppt/01fcecb53969.jpg", alt: "Child-friendly pediatric area", label: "Pediatric Wing" },
  { src: "https://sfile.chatglm.cn/images-ppt/effab92d8e29.jpg", alt: "State-of-the-art dental operatory", label: "Operatory" },
  { src: "https://sfile.chatglm.cn/images-ppt/2b62e874ea7b.jpg", alt: "Calm waiting lounge", label: "Lounge" },
  { src: "https://sfile.chatglm.cn/images-ppt/1dcaa33e3a45.jpg", alt: "Digital dental imaging room", label: "Imaging" },
];
