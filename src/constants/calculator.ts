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
  eyebrow: "HR SAVINGS CALCULATOR",
  titlePart1: "See how much time your HR team could",
  titleHighlight: "save",
  subtitle:
    "Manual HR tasks like payroll, leave management and employee onboarding can take hundreds of hours every year. Get a personalised estimate based on your team size and see the real impact with PeoplesHR.",
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
      title: "Quick and easy",
      subtitle: "Takes less than 2 minutes",
    },
    {
      icon: "chart",
      title: "Based on real benchmarks",
      subtitle: "Using industry data",
    },
    {
      icon: "users",
      title: "Personalised to your organisation",
      subtitle: "See time, cost and ROI potential",
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
      label: "Potential value per year",
      value: "$144,000",
      subtext: "Based on industry benchmark",
      icon: "coins",
      color: "emerald",
    },
    {
      id: "roi",
      label: "Projected ROI",
      value: "410%",
      subtext: "Over 3 years",
      icon: "trending-up",
      color: "blue",
    },
  ] as StatCardItem[],
  commonAreas: {
    heading: "Where time is currently lost",
    badge: "Based on industry benchmark data",
    items: [
      {
        id: "payroll",
        label: "Payroll preparation",
        icon: "file-text",
        hoursPercentage: 32,
        highlightText: "Payslip checks & manual pay runs",
      },
      {
        id: "attendance",
        label: "Leave & attendance",
        icon: "calendar",
        hoursPercentage: 24,
        highlightText: "Leave approvals & overtime auditing",
      },
      {
        id: "onboarding",
        label: "Onboarding",
        icon: "users",
        hoursPercentage: 18,
        highlightText: "Document forms & manual provisioning",
      },
      {
        id: "claims",
        label: "Claims processing",
        icon: "receipt",
        hoursPercentage: 14,
        highlightText: "Receipt verification & disbursement",
      },
      {
        id: "compliance",
        label: "Compliance reporting",
        icon: "shield-check",
        hoursPercentage: 12,
        highlightText: "Statutory audits & policy tracking",
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
  footerNote: "These are estimated figures based on industry benchmarks. Your results may vary.",
  methodologyLink: {
    label: "Learn about our methodology",
    href: "/methodology",
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
