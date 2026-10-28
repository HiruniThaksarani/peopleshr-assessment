export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export const CONTACT_DETAILS = {
  name: "PeoplesHR Inc.",
  brandName: "PeoplesHR",
  tagline: "Cloud Human Capital Management & Payroll",
  description:
    "Enterprise-grade HR automation, intelligent workforce scheduling, and seamless statutory payroll built to empower high-performance teams worldwide.",
  phone: "+1 (800) 555-0199",
  phoneRaw: "+18005550199",
  telUrl: "tel:+18005550199",
  email: "contact@peopleshr.com",
  emailUrl: "mailto:contact@peopleshr.com",
  supportEmail: "support@peopleshr.com",
  supportEmailUrl: "mailto:support@peopleshr.com",
  address: "750 Lexington Avenue, 14th Floor",
  city: "New York, NY 10022",
  country: "United States",
  fullAddress: "750 Lexington Ave, 14th Floor, New York, NY 10022",
  mapUrl: "https://maps.google.com/?q=750+Lexington+Avenue+New+York+NY",
  hours: "Mon – Fri: 8:00 AM – 7:00 PM EST",
  days: "Monday to Friday",
  supportNote: "Dedicated 24/7 priority support for global enterprise deployments.",
  status: "All Systems Operational (99.98% Uptime)",
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  x: "https://x.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
};

export const FOOTER_MODULE_LINKS: FooterLink[] = [
  { label: "Solution Packages", href: "/packages", badge: "Packages" },
  { label: "Platform Features", href: "/features", badge: "Overview" },
  { label: "Implementation Services", href: "/services" },
];

export const FOOTER_TOOL_LINKS: FooterLink[] = [
  { label: "HR Stack Builder", href: "/packages/stack-builder", badge: "New" },
  { label: "HR ROI Calculator", href: "/calculator", badge: "Interactive" },
];

export const FOOTER_RESOURCE_LINKS: FooterLink[] = [
  { label: "HR Insights & Blog", href: "/blog" },
  { label: "HR Software Sri Lanka", href: "/hr-software-sri-lanka" },
  { label: "Contact & Demo", href: "/contact", badge: "Live" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security & ISO 27001", href: "/privacy#security" },
  { label: "Cookie Preferences", href: "/privacy#cookies" },
  { label: "Trust Center", href: "/privacy#trust" },
];
