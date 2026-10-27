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
    label: "Services",
    href: "/services",
    hasDropdown: false,
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
