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
  { label: "All HR Services", href: "/services", badge: "Overview" },
  { label: "Core HR & Directory", href: "#core-hr" },
  { label: "Payroll & Compensation", href: "#payroll", badge: "Popular" },
  { label: "Time & Attendance", href: "#attendance" },
  { label: "Performance & Goals", href: "#performance" },
  { label: "Talent Acquisition", href: "#recruitment" },
  { label: "Employee Self-Service (ESS)", href: "#self-service" },
];

export const FOOTER_TOOL_LINKS: FooterLink[] = [
  { label: "HR Stack Builder", href: "/packages/stack-builder", badge: "New" },
  { label: "HR ROI Calculator", href: "/calculator", badge: "Interactive" },
  { label: "Hours Leak Estimator", href: "#calculator" },
  { label: "HR Maturity Benchmark", href: "#maturity-assessment" },
  { label: "Statutory Compliance Checklist", href: "#compliance-check", badge: "New" },
  { label: "Workforce Cost Simulator", href: "#simulator" },
];

export const FOOTER_RESOURCE_LINKS: FooterLink[] = [
  { label: "Customer Case Studies", href: "#case-studies" },
  { label: "HR Insights & Blog", href: "#blog" },
  { label: "Statutory Labor Guides", href: "#guides" },
  { label: "Help Center & Support", href: "#help-center" },
  { label: "API & Webhook Docs", href: "#api-docs" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Security & ISO 27001", href: "#security" },
  { label: "Cookie Preferences", href: "#cookies" },
  { label: "Trust Center", href: "#trust" },
];
