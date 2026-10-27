export interface HowItWorksSlide {
  image: string;
  alt: string;
  badgeTitle: string;
  badgeSubtitle: string;
  badgeIcon: string;
}

export interface HowItWorksStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  iconType: "user" | "barchart" | "heart";
}

export const HOW_IT_WORKS_SLIDES: HowItWorksSlide[] = [
  {
    image: "/thrive-team-meeting.jpg",
    alt: "Step 1: Setup and configure company hierarchy and employee profiles in PeoplesHR",
    badgeTitle: "Step 1: Connect & Setup",
    badgeSubtitle: "Seamless onboarding & data migration",
    badgeIcon: "01",
  },
  {
    image: "/thrive-hr-consultation.jpg",
    alt: "Step 2: Automate everyday HR workflows, leave, and payroll operations",
    badgeTitle: "Step 2: Automate Daily HR",
    badgeSubtitle: "One-click payroll, leave & attendance",
    badgeIcon: "02",
  },
  {
    image: "/thrive-team-celebration.jpg",
    alt: "Step 3: Empower employees with mobile self-service and team insights",
    badgeTitle: "Step 3: Empower & Scale",
    badgeSubtitle: "Self-service mobile app & analytics",
    badgeIcon: "03",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "step-1-connect",
    stepNumber: "01",
    title: "Connect & Setup",
    subtitle: "Fast data onboarding",
    iconType: "user",
  },
  {
    id: "step-2-automate",
    stepNumber: "02",
    title: "Automate Daily HR",
    subtitle: "Payroll & attendance",
    iconType: "barchart",
  },
  {
    id: "step-3-empower",
    stepNumber: "03",
    title: "Empower & Scale",
    subtitle: "Self-service & insights",
    iconType: "heart",
  },
];

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: "HOW IT WORKS",
  titlePart1: "Transform your people operations in ",
  titleHighlight: "three simple steps",
  description:
    "From seamless data onboarding and custom policy setup to automated payroll and self-service mobile access, PeoplesHR simplifies every stage of your workforce lifecycle into an intuitive, connected experience.",
};

// Backward-compatibility aliases
export type ThriveSlide = HowItWorksSlide;
export type ThrivePillFeature = HowItWorksStep;
export const THRIVE_SLIDES = HOW_IT_WORKS_SLIDES;
export const THRIVE_PILL_FEATURES = HOW_IT_WORKS_STEPS;
export const THRIVE_CONTENT = HOW_IT_WORKS_CONTENT;
