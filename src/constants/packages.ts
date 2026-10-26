export interface PackageItem {
  id: "Foundation" | "Growth" | "Professional" | "Enterprise" | string;
  name: string;
  category: string;
  iconType: "cube" | "document" | "building" | "star";
  themeColor: "orange" | "rose" | "sky" | "slate" | "blue" | "emerald" | "amber" | "purple";
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
    themeColor: "orange",
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
    themeColor: "blue",
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
  // {
  //   id: "Professional",
  //   name: "Professional",
  //   category: "TALENT & WORKFORCE OPTIMIZATION",
  //   iconType: "star",
  //   themeColor: "emerald",
  //   description:
  //     "Advanced workforce scheduling, 360 reviews and operational analytics for multi-site mid-market teams.",
  //   bestFor: "Established mid-market teams (251–1,000 employees) with complex shifts and talent requirements.",
  //   includedServices: [
  //     "HR Essentials",
  //     "Payroll & Time",
  //     "People Experience",
  //     "Talent & Performance",
  //     "People Insights",
  //   ],
  //   features: [
  //     "Everything in Growth",
  //     "Executive workforce analytics & dashboards",
  //     "Shift rosters, geofencing & biometric sync",
  //     "360-degree feedback & continuous OKRs",
  //     "Multi-tier approval matrices & custom workflows",
  //     "Dedicated onboarding manager & priority SLA",
  //   ],
  //   ctaText: "Configure in Stack Builder",
  //   ctaHref: "/packages/stack-builder?bundle=Professional",
  // },
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

// The curated packages displayed on the home page
export const FEATURED_HOME_PACKAGES: PackageItem[] = [
  ALL_PACKAGES.find((p) => p.id === "Foundation") || ALL_PACKAGES[0],
  ALL_PACKAGES.find((p) => p.id === "Growth") || ALL_PACKAGES[1],
  ALL_PACKAGES.find((p) => p.id === "Enterprise") || ALL_PACKAGES[ALL_PACKAGES.length - 1],
].filter(Boolean);

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

export interface PackageThemeConfig {
  card: string;
  icon: string;
  checkBg: string;
  checkIcon: string;
}

export const getPackageThemeConfig = (
  themeColor: PackageItem["themeColor"],
  isPopular?: boolean
): PackageThemeConfig => {
  if (isPopular) {
    return {
      card: "bg-gradient-to-b from-[#eaf2fc] via-[#f5f9ff] to-white border-1 border-primary shadow-[0_24px_50px_-10px_rgba(13,91,189,0.24)] ring-1 ring-primary/20 scale-[1.01] z-10 hover:shadow-[0_32px_64px_-10px_rgba(13,91,189,0.36)] hover:border-primary-dark hover:ring-primary/40 hover:-translate-y-1.5 transition-all duration-300",
      icon: "bg-blue-100/80 border border-blue-200 text-primary",
      checkBg: "bg-primary/10",
      checkIcon: "text-primary",
    };
  }

  switch (themeColor) {
    case "orange":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(249,115,22,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(249,115,22,0.2)] hover:border-orange-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-orange-50 border border-orange-100 text-orange-600",
        checkBg: "bg-orange-50",
        checkIcon: "text-orange-600",
      };
    case "amber":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(245,158,11,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(245,158,11,0.2)] hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-amber-50 border border-amber-100 text-amber-600",
        checkBg: "bg-amber-50",
        checkIcon: "text-amber-600",
      };
    case "purple":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(168,85,247,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(168,85,247,0.2)] hover:border-purple-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-purple-50 border border-purple-100 text-purple-600",
        checkBg: "bg-purple-50",
        checkIcon: "text-purple-600",
      };
    case "emerald":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(16,185,129,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.2)] hover:border-emerald-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-emerald-50 border border-emerald-100 text-emerald-600",
        checkBg: "bg-emerald-50",
        checkIcon: "text-emerald-600",
      };
    case "sky":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(14,165,233,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(14,165,233,0.2)] hover:border-sky-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-sky-50 border border-sky-100 text-sky-600",
        checkBg: "bg-sky-50",
        checkIcon: "text-sky-600",
      };
    case "rose":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(244,63,94,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(244,63,94,0.2)] hover:border-rose-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-rose-50 border border-rose-100 text-rose-600",
        checkBg: "bg-rose-50",
        checkIcon: "text-rose-600",
      };
    case "slate":
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(100,116,139,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(100,116,139,0.2)] hover:border-slate-400/80 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-slate-50 border border-slate-200 text-slate-700",
        checkBg: "bg-slate-100",
        checkIcon: "text-slate-700",
      };
    case "blue":
    default:
      return {
        card: "bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(13,91,189,0.18)] hover:border-primary/60 hover:-translate-y-1 transition-all duration-300",
        icon: "bg-blue-50 border border-blue-100 text-primary",
        checkBg: "bg-blue-50",
        checkIcon: "text-primary",
      };
  }
};

