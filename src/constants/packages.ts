export interface PackageItem {
  id: string;
  name: string;
  category: string;
  iconType: "cube" | "document" | "building";
  themeColor: "blue" | "emerald" | "purple";
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const PACKAGES_CONTENT = {
  eyebrow: "OUR PACKAGES",
  titleLead: "Flexible HR Packages for",
  titleHighlight: "Businesses of All Sizes",
  subtitle:
    "Choose a package that fits your needs or use our HR Stack Builder to find the most relevant solution for your business.",
  packages: [
    {
      id: "foundation",
      name: "Foundation",
      category: "ESSENTIAL HR CAPABILITIES",
      iconType: "cube",
      themeColor: "blue",
      description:
        "Get started with a complete set of core HR tools to manage your people and day-to-day operations.",
      features: [
        "Employee information",
        "Organisational structure",
        "Leave management",
        "Basic reporting",
      ],
      ctaText: "Learn more",
      ctaHref: "#foundation",
    },
    {
      id: "growth",
      name: "Growth",
      category: "COMPLETE HR SOLUTION",
      iconType: "document",
      themeColor: "emerald",
      description:
        "Streamline your HR and payroll processes with a complete set of capabilities for growing organisations.",
      features: [
        "Core HR",
        "Payroll management",
        "Time & attendance",
        "Recruitment",
      ],
      ctaText: "Learn more",
      ctaHref: "#growth",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      category: "ADVANCED CAPABILITIES",
      iconType: "building",
      themeColor: "purple",
      description:
        "A scalable and flexible solution for complex organisations with multi-country requirements.",
      features: [
        "Multi-country payroll",
        "Advanced compliance",
        "Workforce planning",
        "Custom integrations",
      ],
      ctaText: "Learn more",
      ctaHref: "#enterprise",
    },
  ] as PackageItem[],
  stackBuilder: {
    eyebrow: "INTERACTIVE TOOL",
    title: "Not sure which package is right for you?",
    subtitle:
      "Use our HR Stack Builder to find the most relevant combination of HR capabilities based on your business size, industry and priorities.",
    ctaPrimary: {
      label: "Try HR Stack Builder",
      href: "/calculator#stack-builder",
    },
  },
};
