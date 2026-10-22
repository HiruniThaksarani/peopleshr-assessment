export interface SubNavItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
  iconName?: string;
}

export interface NavSection {
  heading?: string;
  items: SubNavItem[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownSections?: NavSection[];
  featured?: {
    title: string;
    description: string;
    href: string;
    tag: string;
    cta: string;
  };
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "Platform Modules",
        items: [
          {
            title: "Core HR & Directory",
            description: "Centralized employee database, org charts & profiles",
            href: "#core-hr",
            iconName: "users",
          },
          {
            title: "Payroll & Compensation",
            description: "Statutory compliance, tax automation & payslips",
            href: "#payroll",
            badge: "Popular",
            iconName: "calculator",
          },
          {
            title: "Time & Attendance",
            description: "Geofencing, biometric sync & leave workflows",
            href: "#attendance",
            iconName: "clock",
          },
          {
            title: "Performance & Goals",
            description: "Continuous reviews, OKRs & 360-degree feedback",
            href: "#performance",
            iconName: "chart",
          },
          {
            title: "Talent Acquisition",
            description: "Applicant pipeline, interviews & automated offer letters",
            href: "#recruitment",
            iconName: "briefcase",
          },
          {
            title: "Employee Self-Service (ESS)",
            description: "Intuitive web & mobile app for teams and managers",
            href: "#self-service",
            iconName: "sparkles",
          },
        ],
      },
    ],
    featured: {
      tag: "Product Release",
      title: "AI-Powered HR Copilot",
      description: "Automate workforce analytics, policy answers, and approvals with AI.",
      href: "#ai-copilot",
      cta: "Explore AI Features",
    },
  },
  {
    label: "Interactive Tools",
    href: "#tools",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "Free Calculators & Audits",
        items: [
          {
            title: "HR ROI Calculator",
            description: "Calculate hours saved and financial return on HR automation",
            href: "/calculator",
            badge: "Interactive",
            iconName: "calculator",
          },
          {
            title: "HR Maturity Benchmark",
            description: "Assess your people operations against industry standards",
            href: "#maturity-assessment",
            iconName: "chart",
          },
          {
            title: "Payroll & Tax Estimator",
            description: "Estimate net pay, statutory withholdings & allowances",
            href: "#tax-estimator",
            iconName: "calculator",
          },
          {
            title: "Statutory Compliance Checklist",
            description: "Interactive audit for labor regulations and HR policies",
            href: "#compliance-check",
            badge: "New",
            iconName: "shield",
          },
        ],
      },
    ],
    featured: {
      tag: "Featured Tool",
      title: "Workforce Cost Simulator",
      description: "Forecast future staffing costs and attrition impacts dynamically.",
      href: "#simulator",
      cta: "Try Simulator",
    },
  },
  {
    label: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "By Industry",
        items: [
          {
            title: "Financial & Banking",
            description: "Strict audit readiness, multi-tier approvals & data governance",
            href: "#solutions-banking",
            iconName: "shield",
          },
          {
            title: "Manufacturing & Logistics",
            description: "Complex shift management, OT rules & shop-floor attendance",
            href: "#solutions-manufacturing",
            iconName: "briefcase",
          },
          {
            title: "Retail & Hospitality",
            description: "High-volume seasonal hiring & distributed store schedules",
            href: "#solutions-retail",
            iconName: "users",
          },
          {
            title: "Technology & Professional",
            description: "Global contractor payroll, agile performance & remote work",
            href: "#solutions-tech",
            iconName: "sparkles",
          },
        ],
      },
      {
        heading: "By Organization Size",
        items: [
          {
            title: "Growing Businesses",
            description: "Scalable 100 to 500 employee companies modernizing HR",
            href: "#solutions-growing",
            iconName: "users",
          },
          {
            title: "Global Enterprises",
            description: "Multi-country payroll, enterprise SSO & custom ERP APIs",
            href: "#solutions-enterprise",
            badge: "Enterprise",
            iconName: "briefcase",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "Knowledge & Growth",
        items: [
          {
            title: "Customer Success Stories",
            description: "Read how leading enterprises transformed workforce operations",
            href: "#case-studies",
            iconName: "users",
          },
          {
            title: "HR Insights & Blog",
            description: "Trends in human capital, labor regulations & leadership",
            href: "#blog",
            iconName: "book",
          },
          {
            title: "Guides & Research Papers",
            description: "Actionable playbooks for HR directors and leadership",
            href: "#guides",
            badge: "Free Downloads",
            iconName: "book",
          },
          {
            title: "Help Center & Documentation",
            description: "Implementation guides, developer API docs & tutorials",
            href: "#help-center",
            iconName: "shield",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
    hasDropdown: false,
  },
];
