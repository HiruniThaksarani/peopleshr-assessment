export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  bestFor: string;
  iconType: "users" | "payroll" | "calendar" | "talent" | "insights" | "compliance";
  themeColor: "blue" | "green" | "sky" | "amber" | "purple" | "emerald";
  linkHref?: string;
}

export const SERVICES_CONTENT = {
  eyebrow: "PLATFORM FEATURES",
  title: "Everything You Need to Manage Your People",
  subtitle:
    "Explore modular PeoplesHR capabilities—from employee records and statutory payroll to self-service, talent, analytics, and compliance—then open each feature page for workflows and FAQs.",
  services: [
    {
      id: "hr-essentials",
      name: "HR Essentials",
      description: "Employee records, digital documents and core HR workflows.",
      features: [
        "Employee information",
        "Organisational structure",
        "Document management",
      ],
      bestFor: "All businesses getting started with digital HR.",
      iconType: "users",
      themeColor: "blue",
      linkHref: "/features/hr-essentials",
    },
    {
      id: "payroll-time",
      name: "Payroll & Time",
      description: "Accurate and compliant payroll with flexible time management.",
      features: [
        "Payroll processing",
        "Time & attendance",
        "Leave management",
      ],
      bestFor: "Businesses that want to simplify payroll and time tracking.",
      iconType: "payroll",
      themeColor: "green",
      linkHref: "/features/payroll-time",
    },
    {
      id: "people-experience",
      name: "People Experience",
      description: "Empower employees with self-service and simple processes.",
      features: [
        "Employee self-service",
        "Requests and approvals",
        "Mobile access",
      ],
      bestFor: "Teams looking to improve employee experience.",
      iconType: "calendar",
      themeColor: "sky",
      linkHref: "/features/people-experience",
    },
    {
      id: "talent-performance",
      name: "Talent & Performance",
      description: "Attract, develop and retain top talent.",
      features: [
        "Recruitment & onboarding",
        "Performance management",
        "Learning & development",
      ],
      bestFor: "Growing businesses focused on talent development.",
      iconType: "talent",
      themeColor: "amber",
      linkHref: "/features/talent-performance",
    },
    {
      id: "people-insights",
      name: "People Insights",
      description: "Make data-driven decisions with real-time workforce insights.",
      features: [
        "Interactive dashboards",
        "Workforce analytics",
        "Custom reports",
      ],
      bestFor: "Leaders who need better visibility into their people data.",
      iconType: "insights",
      themeColor: "purple",
      linkHref: "/features/people-insights",
    },
    {
      id: "compliance-workforce",
      name: "Compliance & Workforce",
      description: "Stay compliant and manage complex workforce needs.",
      features: [
        "Regulatory compliance",
        "Policy management",
        "Multi-country support",
      ],
      bestFor: "Organisations with complex or multi-country requirements.",
      iconType: "compliance",
      themeColor: "emerald",
      linkHref: "/features/compliance-workforce",
    },
  ] as ServiceItem[],
  ctaBanner: {
    eyebrow: "INTERACTIVE TOOL",
    title: "Not sure which package is right for you?",
    subtitle:
      "Use our HR Stack Builder to find the most relevant HR solution for your business needs.",
    buttonText: "Try HR Stack Builder",
    buttonHref: "/packages/stack-builder",
  },
};

export const FEATURES_CONTENT = SERVICES_CONTENT;
export type FeatureItem = ServiceItem;

