export interface TrustMetric {
  icon: "calculator" | "lightbulb" | "shield";
  title: string;
  subtitle: string;
}

export interface StatCardItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: "clock" | "coins" | "trending-up";
  color: "rose" | "emerald" | "blue";
}

export interface CommonAreaItem {
  id: string;
  label: string;
  icon: "file-text" | "calendar" | "users" | "receipt" | "shield-check";
  hoursPercentage: number;
  highlightText: string;
}

export interface CompanyTier {
  id: string;
  label: string;
  employeeRange: string;
  hoursLost: string;
  fteEquivalent: string;
  potentialValue: string;
  projectedRoi: string;
}

export interface FeatureItem {
  icon: "clock" | "chart" | "users";
  title: string;
  subtitle: string;
}

export const CALCULATOR_CONTENT = {
  eyebrow: "TIME & COST SAVINGS CALCULATOR",
  titlePart1: "See how much time and money your organization can",
  titleHighlight: "save",
  subtitle:
    "Manual payroll reconciliation, attendance disputes, and paper-based onboarding drain hundreds of productive hours and thousands in labor costs each year. Get a personalized estimate of your time and financial savings based on your team size.",
  ctaPrimary: {
    label: "Calculate your savings",
    href: "/calculator",
  },
  ctaSecondary: {
    label: "Learn more",
    href: "#products",
  },
  features: [
    {
      icon: "clock",
      title: "Quick & Easy Estimate",
      subtitle: "Takes under 2 minutes to calculate time and cost impact",
    },
    {
      icon: "chart",
      title: "Industry Labor Benchmarks",
      subtitle: "Based on real workforce wage and operational loss data",
    },
    {
      icon: "users",
      title: "Personalized Financial Return",
      subtitle: "See recovered hours, net dollar savings, and 3-year ROI",
    },
  ] as FeatureItem[],
  trustMetrics: [
    {
      icon: "calculator",
      title: "Quick & easy",
      subtitle: "Takes less than 2 minutes",
    },
    {
      icon: "lightbulb",
      title: "Transparent assumptions",
      subtitle: "Based on industry benchmarks",
    },
    {
      icon: "shield",
      title: "Personalised results",
      subtitle: "Tailored to your organisation",
    },
  ] as TrustMetric[],
  statCards: [
    {
      id: "hours",
      label: "Hours saved per year",
      value: "3,000",
      subtext: "Equivalent to 1.4 FTE",
      icon: "clock",
      color: "rose",
    },
    {
      id: "value",
      label: "Annual financial savings",
      value: "$144,000",
      subtext: "Direct labor & overhead recovered",
      icon: "coins",
      color: "emerald",
    },
    {
      id: "roi",
      label: "Projected 3-Year ROI",
      value: "410%",
      subtext: "Payback in under 4 months",
      icon: "trending-up",
      color: "blue",
    },
  ] as StatCardItem[],
  commonAreas: {
    heading: "Where time & labor budget leak",
    badge: "Based on industry benchmark data",
    items: [
      {
        id: "payroll",
        label: "Payroll preparation & rework",
        icon: "file-text",
        hoursPercentage: 32,
        highlightText: "Payslip checks & error recalculations",
      },
      {
        id: "attendance",
        label: "Leave & attendance audits",
        icon: "calendar",
        hoursPercentage: 24,
        highlightText: "Overtime audits & dispute resolution",
      },
      {
        id: "onboarding",
        label: "Onboarding & provisioning",
        icon: "users",
        hoursPercentage: 18,
        highlightText: "Document forms & manual provisioning",
      },
      {
        id: "claims",
        label: "Expense claims processing",
        icon: "receipt",
        hoursPercentage: 14,
        highlightText: "Receipt verification & disbursement",
      },
      {
        id: "compliance",
        label: "Compliance & tax reporting",
        icon: "shield-check",
        hoursPercentage: 12,
        highlightText: "Statutory audits & penalty avoidance",
      },
    ] as CommonAreaItem[],
  },
  companyTiers: [
    {
      id: "small",
      label: "50 – 100",
      employeeRange: "50-100 employees",
      hoursLost: "1,450",
      fteEquivalent: "0.7 FTE",
      potentialValue: "$68,000",
      projectedRoi: "320%",
    },
    {
      id: "benchmark",
      label: "100 – 250",
      employeeRange: "100-250 employees",
      hoursLost: "3,000",
      fteEquivalent: "1.4 FTE",
      potentialValue: "$144,000",
      projectedRoi: "410%",
    },
    {
      id: "mid",
      label: "250 – 500",
      employeeRange: "250-500 employees",
      hoursLost: "5,800",
      fteEquivalent: "2.8 FTE",
      potentialValue: "$280,000",
      projectedRoi: "480%",
    },
    {
      id: "enterprise",
      label: "500+",
      employeeRange: "500+ employees",
      hoursLost: "11,200",
      fteEquivalent: "5.4 FTE",
      potentialValue: "$540,000",
      projectedRoi: "540%",
    },
  ] as CompanyTier[],
  footerNote: "Estimated time and dollar savings are modeled on industry benchmarks. Individual financial outcomes may vary.",
  methodologyLink: {
    label: "Read how we estimate savings",
    href: "/#faq",
  },
};

export type PayrollFrequency = "monthly" | "semi-monthly";

export type CalculatorTab = "summary" | "sinks" | "roi";

export interface CalculatorPreset {
  id: string;
  name: string;
  headcount: number;
  rate: number;
  frequency: PayrollFrequency;
  newHires: number;
  syncTime: number;
  errorRate: number;
}

export interface CalculatorInputs {
  headcount: number;
  hourlyRate: number;
  payrollFreq: PayrollFrequency;
  newHires: number;
  syncTime: number;
  errorRate: number;
}

export interface SinkCategory {
  title: string;
  percent: number;
  amount: number;
  hours: number;
  color: string;
  description: string;
}

export interface CalculatorResults {
  totalWastedHours: number;
  annualCostOfDrag: number;
  hoursReclaimed: number;
  estimatedSoftwareCost: number;
  netAnnualSavings: number;
  monthlyLoss: number;
  weeklyReclaimed: number;
  roi3Year: number;
  paybackMonths: number;
  sinkCategories: SinkCategory[];
}

export const CALCULATOR_PRESETS: CalculatorPreset[] = [
  {
    id: "tech",
    name: "Tech (120)",
    headcount: 120,
    rate: 38,
    frequency: "monthly",
    newHires: 6,
    syncTime: 28,
    errorRate: 1.8,
  },
  {
    id: "manufacturing",
    name: "Manufacturing (450)",
    headcount: 450,
    rate: 32,
    frequency: "semi-monthly",
    newHires: 18,
    syncTime: 54,
    errorRate: 2.4,
  },
  {
    id: "retail",
    name: "Retail (1,100)",
    headcount: 1100,
    rate: 24,
    frequency: "semi-monthly",
    newHires: 45,
    syncTime: 86,
    errorRate: 3.1,
  },
];
