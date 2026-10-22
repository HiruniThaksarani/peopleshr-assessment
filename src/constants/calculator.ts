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

export const CALCULATOR_CONTENT = {
  eyebrow: "HR HOURS LEAK CALCULATOR",
  titlePart1: "Where Is Your HR Team's",
  titleHighlight: "Time Going?",
  subtitle:
    "Manual payroll preparation, attendance reconciliation and repetitive HR tasks can quietly consume valuable hours. Discover the real impact and see how much time and cost you could save with PeoplesHR.",
  ctaPrimary: {
    label: "Explore Your HR Impact",
    href: "#calculator",
  },
  ctaSecondary: {
    label: "Learn more",
    href: "#products",
  },
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
      label: "Hours lost per year",
      value: "3,000",
      subtext: "Equivalent to 1.4 FTE",
      icon: "clock",
      color: "rose",
    },
    {
      id: "value",
      label: "Potential value",
      value: "$144,000",
      subtext: "per year (est.)",
      icon: "coins",
      color: "emerald",
    },
    {
      id: "roi",
      label: "Projected ROI",
      value: "410%",
      subtext: "over 3 years",
      icon: "trending-up",
      color: "blue",
    },
  ] as StatCardItem[],
  commonAreas: {
    heading: "Common areas where time is lost",
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
      label: "50 - 100",
      employeeRange: "50-100 employees",
      hoursLost: "1,450",
      fteEquivalent: "0.7 FTE",
      potentialValue: "$68,000",
      projectedRoi: "320%",
    },
    {
      id: "benchmark",
      label: "100 - 250",
      employeeRange: "100-250 employees",
      hoursLost: "3,000",
      fteEquivalent: "1.4 FTE",
      potentialValue: "$144,000",
      projectedRoi: "410%",
    },
    {
      id: "mid",
      label: "250 - 500",
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
};
