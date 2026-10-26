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
  eyebrow: "OUR SERVICES",
  title: "Everything You Need to Manage Your People",
  subtitle:
    "From core HR to payroll, talent and compliance, PeoplesHR provides a complete set of HR solutions to streamline your workforce operations.",
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
