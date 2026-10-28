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
    label: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "Features",
    href: "/features",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "Platform Modules",
        items: [
          {
            title: "HR Essentials",
            description: "Employee records, org structure, and documents",
            href: "/features/hr-essentials",
            iconName: "users",
          },
          {
            title: "Payroll & Time",
            description: "Payroll, attendance, and leave workflows",
            href: "/features/payroll-time",
            iconName: "calculator",
          },
          {
            title: "People Experience",
            description: "Employee self-service and mobile access",
            href: "/features/people-experience",
            iconName: "sparkles",
          },
          {
            title: "Talent & Performance",
            description: "Recruitment, onboarding, and appraisals",
            href: "/features/talent-performance",
            iconName: "sparkles",
          },
          {
            title: "People Insights",
            description: "Dashboards, analytics, and custom reports",
            href: "/features/people-insights",
            iconName: "calculator",
          },
          {
            title: "Compliance & Workforce",
            description: "Policy, statutory, and multi-country support",
            href: "/features/compliance-workforce",
            iconName: "sparkles",
          },
        ],
      },
    ],
    featured: {
      tag: "All Capabilities",
      title: "Explore the Full Feature Suite",
      description: "See how PeoplesHR modules work together across HR, payroll, and people operations.",
      href: "/features",
      cta: "View All Features",
    },
  },
  {
    label: "Packages",
    href: "/packages",
    hasDropdown: false,
  },
  {
    label: "Interactive Tools",
    href: "/packages/stack-builder",
    hasDropdown: true,
    dropdownSections: [
      {
        heading: "Workforce Optimization",
        items: [
          {
            title: "HR Stack Builder",
            description: "Build and shape your tailored HR capability stack",
            href: "/packages/stack-builder",
            badge: "Popular",
            iconName: "sparkles",
          },
          {
            title: "HR ROI Calculator",
            description: "Calculate hours saved and financial return on HR automation",
            href: "/calculator",
            badge: "Interactive",
            iconName: "calculator",
          },
        ],
      },
    ],
    featured: {
      tag: "Interactive Suite",
      title: "Tailor Your HR Tech Stack",
      description: "Assemble platform modules and model immediate annual cost savings.",
      href: "/packages/stack-builder",
      cta: "Launch Stack Builder",
    },
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: false,
  },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: false,
  },
];
