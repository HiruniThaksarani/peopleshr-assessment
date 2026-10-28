export interface OperationFeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "users" | "file-text" | "calendar" | "chart-bars" | "star" | "shield-check";
  iconBgColor: string;
  iconColor: string;
  href?: string;
}

export const PEOPLE_OPERATIONS_CONTENT = {
  eyebrow: "PLATFORM FEATURES",
  titleLead: "Everything You Need to",
  titleHighlight: "Manage Your People",
  subtitle:
    "From core HR to payroll, attendance to performance, PeoplesHR helps you streamline every aspect of your workforce - in one unified platform.",
  cta: {
    label: "Explore All Features",
    href: "/features",
  },
  features: [
    {
      id: "core-hr",
      title: "Core HR",
      description: "Manage your entire workforce with ease.",
      iconName: "users",
      iconBgColor: "bg-[#eff6ff]", // soft blue
      iconColor: "text-[#2563eb]",
      href: "/features/hr-essentials",
    },
    {
      id: "payroll",
      title: "Payroll",
      description: "Accurate and compliant payroll, every time.",
      iconName: "file-text",
      iconBgColor: "bg-[#ecfdf5]", // soft green
      iconColor: "text-[#10b981]",
      href: "/features/payroll-time",
    },
    {
      id: "time-attendance",
      title: "Time & Attendance",
      description: "Track attendance and manage flexible work.",
      iconName: "calendar",
      iconBgColor: "bg-[#eff6ff]", // soft blue
      iconColor: "text-[#2563eb]",
      href: "/features/payroll-time",
    },
    {
      id: "talent-management",
      title: "Talent Management",
      description: "Attract, develop and retain top talent.",
      iconName: "chart-bars",
      iconBgColor: "bg-[#fff7ed]", // soft orange
      iconColor: "text-[#f97316]",
      href: "/features/talent-performance",
    },
    {
      id: "performance",
      title: "Performance",
      description: "Drive growth with continuous feedback.",
      iconName: "star",
      iconBgColor: "bg-[#faf5ff]", // soft purple
      iconColor: "text-[#9333ea]",
      href: "/features/talent-performance",
    },
    {
      id: "compliance",
      title: "Compliance",
      description: "Stay compliant with local regulations.",
      iconName: "shield-check",
      iconBgColor: "bg-[#ecfdf5]", // soft emerald
      iconColor: "text-[#10b981]",
      href: "/features/compliance-workforce",
    },
  ] as OperationFeatureItem[],
};
