export interface PackageItem {
  id: "Foundation" | "Growth" | "Professional" | "Enterprise" | string;
  name: string;
  category: string;
  iconType: "cube" | "document" | "building" | "star";
  themeColor: "blue" | "emerald" | "amber" | "purple";
  description: string;
  bestFor: string;
  features: string[];
  includedServices: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

export const ALL_PACKAGES: PackageItem[] = [
  {
    id: "Foundation",
    name: "Foundation",
    category: "ESSENTIAL HR OPERATIONS",
    iconType: "cube",
    themeColor: "blue",
    description:
      "Get started with essential core HR tools to organize employee administration and simplify daily workflows.",
    bestFor: "Startups & small businesses (1–50 employees) replacing spreadsheets and manual paperwork.",
    includedServices: ["HR Essentials", "People Experience (Basic)"],
    features: [
      "Core HR & digital employee records",
      "Leave & absence approval workflows",
      "Time & attendance tracking",
      "Employee self-service (ESS) portal",
      "Basic reporting & document management",
    ],
    ctaText: "Configure in Stack Builder",
    ctaHref: "/packages/stack-builder?bundle=Foundation",
  },
  {
    id: "Growth",
    name: "Growth",
    category: "COMPLETE HR SOLUTION",
    iconType: "document",
    themeColor: "emerald",
    popular: true,
    description:
      "Streamline your HR and automated payroll with a complete set of capabilities for scaling organizations.",
    bestFor: "Growing businesses (51–250 employees) needing unified payroll, time, and talent tracking.",
    includedServices: [
      "HR Essentials",
      "Payroll & Time",
      "People Experience",
      "Talent & Performance",
    ],
    features: [
      "Everything in Foundation",
      "Automated payroll & statutory compliance",
      "Time & attendance with shift scheduling",
      "Recruitment & applicant pipeline",
      "Performance management & appraisals",
      "Native iOS & Android mobile self-service app",
    ],
    ctaText: "Configure in Stack Builder",
    ctaHref: "/packages/stack-builder?bundle=Growth",
  },
  {
    id: "Professional",
    name: "Professional",
    category: "TALENT & WORKFORCE OPTIMIZATION",
    iconType: "star",
    themeColor: "amber",
    description:
      "Advanced workforce scheduling, 360 reviews and operational analytics for multi-site mid-market teams.",
    bestFor: "Established mid-market teams (251–1,000 employees) with complex shifts and talent requirements.",
    includedServices: [
      "HR Essentials",
      "Payroll & Time",
      "People Experience",
      "Talent & Performance",
      "People Insights",
    ],
    features: [
      "Everything in Growth",
      "Executive workforce analytics & dashboards",
      "Shift rosters, geofencing & biometric sync",
      "360-degree feedback & continuous OKRs",
      "Multi-tier approval matrices & custom workflows",
      "Dedicated onboarding manager & priority SLA",
    ],
    ctaText: "Configure in Stack Builder",
    ctaHref: "/packages/stack-builder?bundle=Professional",
  },
  {
    id: "Enterprise",
    name: "Enterprise",
    category: "ADVANCED CAPABILITIES",
    iconType: "building",
    themeColor: "purple",
    description:
      "A flexible and scalable solution for multi-site and global enterprises with advanced governance.",
    bestFor: "Large or multi-country organizations (1,000+ employees) requiring high compliance and security.",
    includedServices: [
      "HR Essentials",
      "Payroll & Time",
      "People Experience",
      "Talent & Performance",
      "People Insights",
      "Compliance & Workforce",
    ],
    features: [
      "Everything in Professional",
      "Multi-country & multi-currency payroll (30+ countries)",
      "Advanced statutory compliance & audit logs",
      "Strategic workforce & headcount planning",
      "Custom REST APIs, webhooks & ERP integrations",
      "Enterprise SSO (SAML/Okta), RBAC & 24/7 dedicated lead",
    ],
    ctaText: "Configure in Stack Builder",
    ctaHref: "/packages/stack-builder?bundle=Enterprise",
  },
];

// The 3 curated packages displayed on the home page
export const FEATURED_HOME_PACKAGES: PackageItem[] = [
  ALL_PACKAGES[0], // Foundation
  ALL_PACKAGES[1], // Growth (Most Popular)
  ALL_PACKAGES[3], // Enterprise
];

export const PACKAGES_CONTENT = {
  eyebrow: "OUR PACKAGES",
  titleLead: "Flexible HR Packages for",
  titleHighlight: "Businesses of All Sizes",
  subtitle:
    "Choose a pre-configured package that fits your stage of growth, or explore all tiers and build your custom stack.",
  packages: FEATURED_HOME_PACKAGES,
  allPackages: ALL_PACKAGES,
  exploreAllCta: {
    label: "Explore All Packages & Service Breakdown",
    href: "/packages",
  },
  stackBuilder: {
    eyebrow: "INTERACTIVE TOOL",
    title: "Not sure which package is right for you?",
    subtitle:
      "Use our HR Stack Builder to find the most relevant combination of HR capabilities based on your business size, industry and priorities.",
    ctaPrimary: {
      label: "Try HR Stack Builder",
      href: "/packages/stack-builder",
    },
  },
};

// Alignment matrix between the 6 Cloud Services and the 4 Packages
export const PACKAGE_SERVICE_MATRIX = [
  {
    service: "HR Essentials",
    description: "Employee records, digital documents & core HR workflows",
    foundation: true,
    growth: true,
    professional: true,
    enterprise: true,
  },
  {
    service: "Payroll & Time",
    description: "Automated payroll, shifts, time tracking & statutory taxes",
    foundation: false,
    growth: true,
    professional: true,
    enterprise: true,
  },
  {
    service: "People Experience",
    description: "Employee self-service portal, mobile app & quick approvals",
    foundation: "Basic",
    growth: true,
    professional: true,
    enterprise: true,
  },
  {
    service: "Talent & Performance",
    description: "Recruitment pipeline, 360 appraisals & continuous OKRs",
    foundation: false,
    growth: "Recruitment & Appraisals",
    professional: "Full Suite + 360",
    enterprise: "Full Suite + Succession",
  },
  {
    service: "People Insights",
    description: "Interactive analytics dashboards & retention metrics",
    foundation: "Basic Reports",
    growth: "Standard Dashboards",
    professional: "Advanced Analytics",
    enterprise: "Custom BI & Predictive",
  },
  {
    service: "Compliance & Workforce",
    description: "Multi-country labor laws, global governance & ERP APIs",
    foundation: false,
    growth: false,
    professional: "Audit Trail",
    enterprise: "30+ Countries & ERP APIs",
  },
];
