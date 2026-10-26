export type Priority = "Must" | "Nice" | "Not now";

export interface StackModule {
  id: string;
  name: string;
  short: string;
  reason: string;
  iconName: "users" | "file-text" | "calendar" | "briefcase" | "chart" | "sparkles" | "chart-bars" | "globe" | "sliders";
  tags: ("Foundation" | "Growth" | "Enterprise")[];
  defaultPriority: Priority;
  weight: number;
}

export interface BundleInfo {
  id: "Foundation" | "Growth" | "Professional" | "Enterprise" | string;
  name: string;
  eyebrow: string;
  subtitle: string;
  bestFor: string;
  themeColor: "orange" | "blue" | "green" | "purple" | "amber";
  iconType: "cube" | "chart" | "building" | "star";
  features: string[];
  moduleIds: string[];
  description: string;
  featured?: boolean;
}

export interface BusinessInputs {
  employees: string;
  countries: string;
  currency: string;
  industry: string;
  locations: string;
  problems: string[];
  priorities: Record<string, Priority>;
  system: string;
  timeline: string;
}

export const STACK_MODULES: StackModule[] = [
  {
    id: "core",
    name: "Core HR",
    short: "Manage employee information centrally.",
    reason: "Create a single source of truth for employee records and organizational structure.",
    iconName: "users",
    tags: ["Foundation", "Growth", "Enterprise"],
    defaultPriority: "Must",
    weight: 3,
  },
  {
    id: "payroll",
    name: "Payroll Management",
    short: "Automate and simplify payroll.",
    reason: "Connect employee information with a compliant and structured payroll process.",
    iconName: "file-text",
    tags: ["Foundation", "Growth", "Enterprise"],
    defaultPriority: "Must",
    weight: 3,
  },
  {
    id: "attendance",
    name: "Time & Attendance",
    short: "Track attendance and manage flexible schedules.",
    reason: "Bring attendance records, shifts and working hours into one unified workflow.",
    iconName: "calendar",
    tags: ["Foundation", "Growth", "Enterprise"],
    defaultPriority: "Must",
    weight: 2,
  },
  {
    id: "leave",
    name: "Leave & Absence",
    short: "Replace email requests with clear approval flows.",
    reason: "Streamline leave requests, balances and supervisor approval chains.",
    iconName: "calendar",
    tags: ["Foundation", "Growth", "Enterprise"],
    defaultPriority: "Must",
    weight: 2,
  },
  {
    id: "recruitment",
    name: "Recruitment",
    short: "Manage your hiring process.",
    reason: "Track applicants and interview stages in a modern, organized hiring pipeline.",
    iconName: "briefcase",
    tags: ["Growth", "Enterprise"],
    defaultPriority: "Nice",
    weight: 2,
  },
  {
    id: "performance",
    name: "Performance Management",
    short: "Drive growth with continuous feedback.",
    reason: "Support structured reviews, OKRs and continuous development conversations.",
    iconName: "chart",
    tags: ["Growth", "Enterprise"],
    defaultPriority: "Nice",
    weight: 2,
  },
  {
    id: "selfservice",
    name: "Employee Self-Service",
    short: "Give employees more ownership.",
    reason: "Let employees access key information, payslips and submit requests easily.",
    iconName: "sparkles",
    tags: ["Growth", "Enterprise"],
    defaultPriority: "Nice",
    weight: 2,
  },
  {
    id: "analytics",
    name: "People Analytics & Reporting",
    short: "Turn HR data into insight.",
    reason: "Help HR leaders understand workforce trends and operational patterns.",
    iconName: "chart-bars",
    tags: ["Growth", "Enterprise"],
    defaultPriority: "Nice",
    weight: 2,
  },
  {
    id: "multi",
    name: "Multi-country & Multi-currency Payroll",
    short: "Support a cross-border workforce.",
    reason: "Operating in multiple countries introduces local tax laws and distinct payroll currencies.",
    iconName: "globe",
    tags: ["Enterprise"],
    defaultPriority: "Not now",
    weight: 4,
  },
  {
    id: "integrations",
    name: "Advanced Integrations & Controls",
    short: "Connect a complex HR ecosystem.",
    reason: "Connect ERPs, custom APIs, advanced governance workflows, and enterprise SSO.",
    iconName: "sliders",
    tags: ["Enterprise"],
    defaultPriority: "Not now",
    weight: 3,
  },
];

export const STACK_BUNDLES: BundleInfo[] = [
  {
    id: "Foundation",
    name: "Foundation",
    eyebrow: "ESSENTIAL HR OPERATIONS",
    subtitle: "Core digital HR capabilities to organize employee administration.",
    bestFor: "Small businesses & startups (1–50 employees) replacing spreadsheets.",
    themeColor: "orange",
    iconType: "cube",
    features: [
      "Core HR & digital employee records",
      "Leave management & approval workflows",
      "Time & attendance tracking",
      "Employee self-service (ESS) portal",
      "Document management & basic reporting",
    ],
    moduleIds: ["core", "leave", "attendance", "selfservice"],
    description: "A focused starting point for teams that want to organize essential HR processes.",
  },
  {
    id: "Growth",
    name: "Growth",
    eyebrow: "COMPLETE HR & PAYROLL",
    subtitle: "Unified HR, automated payroll and talent acquisition for scaling teams.",
    bestFor: "Growing organizations (51–250 employees) with expanding requirements.",
    themeColor: "blue",
    iconType: "chart",
    features: [
      "Everything in Foundation",
      "Automated payroll & statutory compliance",
      "Recruitment & applicant pipeline",
      "Performance appraisals & goal tracking",
      "Native iOS & Android mobile self-service app",
      "Standard people analytics & reporting",
    ],
    moduleIds: [
      "core",
      "leave",
      "attendance",
      "payroll",
      "recruitment",
      "performance",
      "selfservice",
      "analytics",
    ],
    description: "A broader setup for growing organizations ready to connect more of the employee journey.",
    featured: true,
  },
  {
    id: "Enterprise",
    name: "Enterprise",
    eyebrow: "GLOBAL ENTERPRISE GOVERNANCE",
    subtitle: "Global multi-country payroll, enterprise security and custom ERP integrations.",
    bestFor: "Large or multi-country organizations (1,000+ employees) requiring high compliance.",
    themeColor: "purple",
    iconType: "building",
    features: [
      "Everything in Growth",
      "Multi-country & multi-currency payroll",
      "Advanced statutory compliance & audit logs",
      "Strategic workforce & headcount planning",
      "Custom REST APIs & ERP integrations",
      "Enterprise SSO, RBAC & 24/7 dedicated support",
    ],
    moduleIds: [
      "core",
      "leave",
      "attendance",
      "payroll",
      "recruitment",
      "performance",
      "selfservice",
      "analytics",
      "multi",
      "integrations",
    ],
    description: "A flexible starting point for larger or multi-country organizations with complex needs.",
  },
];

export const COMPANY_SIZE_OPTIONS = [
  { id: "1-50", label: "1-50 employees", hint: "Small team" },
  { id: "51-200", label: "51-200 employees", hint: "Growing business" },
  { id: "201-1,000", label: "201-1,000 employees", hint: "Mid-market" },
  { id: "1,000+", label: "1,000+ employees", hint: "Enterprise" },
];

export const COUNTRY_OPTIONS = [
  "1 country",
  "2 countries",
  "3–5 countries",
  "6+ countries",
];

export const CURRENCY_OPTIONS = [
  "LKR (Sri Lankan Rupee)",
  "USD ($ United States Dollar)",
  "EUR (€ Euro)",
  "GBP (£ British Pound)",
  "SGD ($ Singapore Dollar)",
  "AED (د.إ UAE Dirham)",
  "AUD ($ Australian Dollar)",
  "CAD ($ Canadian Dollar)",
];

export const INDUSTRY_OPTIONS = [
  "Technology",
  "Financial Services & Banking",
  "Manufacturing & Logistics",
  "Retail & Hospitality",
  "Healthcare & Life Sciences",
  "Professional Services",
  "Education",
  "Other",
];

export const LOCATION_OPTIONS = [
  "1 location",
  "2–5 locations",
  "6–10 locations",
  "10+ locations",
];

export const CHALLENGE_OPTIONS = [
  "Manual HR administration",
  "Payroll takes too long",
  "Employee data is scattered",
  "Leave requests are hard to track",
  "Attendance is difficult to manage",
  "Hiring is too manual",
  "Limited workforce insights",
  "Employees rely on HR for everything",
];

export const CURRENT_SYSTEM_OPTIONS = [
  {
    title: "Spreadsheets and email",
    subtitle: "Simple to start, but harder to scale as your headcount expands",
  },
  {
    title: "Separate tools for different tasks",
    subtitle: "Information is spread across systems without seamless integration",
  },
  {
    title: "Existing HR software",
    subtitle: "Looking to improve capabilities, user experience or consolidate vendors",
  },
  {
    title: "Mostly manual / paper-based",
    subtitle: "Ready to transition into a structured digital workflow",
  },
];

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 3 months",
  "In 3–6 months",
  "Just exploring",
];

export const INITIAL_BUSINESS_INPUTS: BusinessInputs = {
  employees: "51-200",
  countries: "1 country",
  currency: "LKR (Sri Lankan Rupee)",
  industry: "Technology",
  locations: "1 location",
  problems: [
    "Manual HR administration",
    "Payroll takes too long",
  ],
  priorities: {
    core: "Must",
    payroll: "Must",
    attendance: "Must",
    leave: "Must",
    recruitment: "Nice",
    performance: "Nice",
    selfservice: "Nice",
    analytics: "Nice",
    multi: "Not now",
    integrations: "Not now",
  },
  system: "Spreadsheets and email",
  timeline: "Within 3 months",
};

export interface MatchScoreResult {
  bundle: BundleInfo;
  score: number;
  isRecommended: boolean;
  whyFitsList: string[];
  whyNotText: string;
}

export function calculateStackRecommendation(inputs: BusinessInputs): {
  recommended: MatchScoreResult;
  others: MatchScoreResult[];
  scores: Record<string, number>;
  activeModules: StackModule[];
  mustCount: number;
  niceCount: number;
} {
  const isMultiCountry = inputs.countries !== "1 country";
  const isLargeHeadcount = inputs.employees === "1,000+" || inputs.employees === "201-1,000";
  const isSmallHeadcount = inputs.employees === "1-50";

  // Effective priorities factoring in cross-border & size rules
  const effectivePriorities = { ...inputs.priorities };
  if (isMultiCountry) {
    effectivePriorities.multi = "Must";
  }
  if (inputs.employees === "1,000+" && effectivePriorities.integrations === "Not now") {
    effectivePriorities.integrations = "Nice";
  }

  const activeModules = STACK_MODULES.filter(
    (m) => effectivePriorities[m.id] !== "Not now"
  );
  const mustCount = activeModules.filter(
    (m) => effectivePriorities[m.id] === "Must"
  ).length;
  const niceCount = activeModules.filter(
    (m) => effectivePriorities[m.id] === "Nice"
  ).length;

  // Calculate weighted scoring for each bundle
  const bundleScores: Record<string, number> = {};

  STACK_BUNDLES.forEach((bundle) => {
    let earned = 0;
    let total = 0;

    STACK_MODULES.forEach((m) => {
      const p = effectivePriorities[m.id];
      if (p === "Not now") return;

      const priorityMultiplier = p === "Must" ? 3 : 1;
      const weight = m.weight * priorityMultiplier;
      total += weight;

      if (bundle.moduleIds.includes(m.id)) {
        earned += weight;
      }
    });

    let rawScore = total > 0 ? Math.round((earned / total) * 100) : 90;

    // Boundary rules
    if (bundle.id === "Foundation") {
      if (isMultiCountry || inputs.employees === "1,000+") {
        rawScore = Math.max(38, rawScore - 26);
      } else if (inputs.employees === "201-1,000") {
        rawScore = Math.max(50, rawScore - 18);
      } else if (effectivePriorities.payroll === "Must" && !bundle.moduleIds.includes("payroll")) {
        rawScore = Math.min(rawScore, 68);
      }
    }

    if (bundle.id === "Enterprise") {
      if (isSmallHeadcount && !isMultiCountry) {
        rawScore = Math.max(48, rawScore - 16);
      } else if (isMultiCountry || inputs.employees === "1,000+") {
        rawScore = Math.min(98, rawScore + 10);
      }
    }

    if (bundle.id === "Growth") {
      if (inputs.employees === "51-200" || inputs.employees === "201-1,000") {
        if (!isMultiCountry) {
          rawScore = Math.max(92, rawScore);
        }
      }
    }

    bundleScores[bundle.id] = Math.min(98, Math.max(30, rawScore));
  });

  // Rank bundles
  const ranked = [...STACK_BUNDLES]
    .map((b) => ({
      bundle: b,
      score: bundleScores[b.id],
      isRecommended: false,
      whyFitsList: [] as string[],
      whyNotText: "",
    }))
    .sort((a, b) => b.score - a.score);

  // Mark top recommendation
  ranked[0].isRecommended = true;

  // Build dynamic "Why this fits" bullet points
  const topBundle = ranked[0].bundle;
  const whyFitsList: string[] = [];

  const keyPriorities = activeModules
    .filter((m) => effectivePriorities[m.id] === "Must")
    .map((m) => m.name)
    .slice(0, 3)
    .join(", ");

  if (keyPriorities) {
    whyFitsList.push(`Covers your key priorities (${keyPriorities})`);
  }
  whyFitsList.push(`Suitable for your company size (${inputs.employees} employees) and ${inputs.industry} industry`);
  whyFitsList.push("Provides flexibility for future growth");

  if (topBundle.id === "Growth") {
    whyFitsList.push("Includes advanced reporting capabilities and unified employee self-service");
  } else if (topBundle.id === "Enterprise") {
    whyFitsList.push("Includes dedicated multi-country payroll compliance and enterprise integrations");
  } else {
    whyFitsList.push("Focuses on core automation without unnecessary complexity");
  }

  ranked[0].whyFitsList = whyFitsList;

  // Build "Why not the others?" descriptions
  ranked.forEach((item) => {
    if (item.isRecommended) return;

    if (item.bundle.id === "Foundation") {
      item.whyNotText =
        "Covers core needs but may be limited for your growth plans and additional requirements.";
    } else if (item.bundle.id === "Enterprise") {
      item.whyNotText =
        "Includes advanced capabilities you may not need right now based on your current setup.";
    } else {
      item.whyNotText =
        "A strong general option, but your specific requirements point more decisively to the recommended setup.";
    }
  });

  return {
    recommended: ranked[0],
    others: ranked.slice(1),
    scores: bundleScores,
    activeModules,
    mustCount,
    niceCount,
  };
}
