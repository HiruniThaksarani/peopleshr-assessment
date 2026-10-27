export interface ContactFAQ {
  question: string;
  answer: string;
}

export interface DirectContactDetail {
  title: string;
  subtitle: string;
  value: string;
  actionUrl: string;
  actionText: string;
  iconName: "phone" | "mail" | "mapPin" | "clock";
}

export const CONTACT_PAGE_CONTENT = {
  eyebrow: "GET IN TOUCH & REQUEST A DEMO",
  titlePart1: "Let's Connect & Transform Your",
  titleHighlight: "People Operations",
  subtitle:
    "Whether you're exploring customized HR packages, looking to automate multi-country payroll, or evaluating potential ROI, our enterprise solution specialists are ready to guide you.",
  formTitle: "Request Your Personalized Demo",
  formSubtitle: "Tell us about your organization and we'll prepare a tailored walkthrough.",
  demoBenefitsTitle: "Why Schedule a PeoplesHR Demo?",
  demoBenefitsSubtitle: "What you can expect in your 30-minute tailored consultation:",
};

export const DEMO_BENEFITS: string[] = [
  "Tailored 1-on-1 walkthrough configured to your organization's exact headcount & industry",
  "Customized HR hours leak & ROI benchmark report prepared for your executive leadership",
  "Live demonstration of Employee Self-Service (ESS), mobile check-in, and manager workflows",
  "Direct Q&A on statutory tax compliance, labor law rules, and enterprise integrations",
  "Strict zero-pressure consultation — no credit card or contractual commitment required",
];

export const DIRECT_CONTACT_ITEMS: DirectContactDetail[] = [
  {
    title: "Call Us Directly",
    subtitle: "Speak directly with an enterprise solutions specialist",
    value: "+1 (800) 555-0199",
    actionUrl: "tel:+18005550199",
    actionText: "Call Sales",
    iconName: "phone",
  },
  {
    title: "Write an Email",
    subtitle: "Drop us an email for general or partnership inquiries",
    value: "contact@peopleshr.com",
    actionUrl: "mailto:contact@peopleshr.com",
    actionText: "Send Email",
    iconName: "mail",
  },
  {
    title: "Headquarters Office",
    subtitle: "Global headquarters and executive customer briefing center",
    value: "750 Lexington Avenue, 14th Floor, New York, NY 10022",
    actionUrl: "https://maps.google.com/?q=750+Lexington+Avenue+New+York+NY",
    actionText: "View Map",
    iconName: "mapPin",
  },
  {
    title: "Support & Operation Hours",
    subtitle: "Dedicated client coverage and live reception",
    value: "Monday – Friday: 8:00 AM – 7:00 PM EST",
    actionUrl: "mailto:support@peopleshr.com",
    actionText: "Live Support",
    iconName: "clock",
  },
];

export const COMPANY_SIZE_OPTIONS = [
  { label: "1 – 25 employees (Startup / Boutique)", value: "1-25" },
  { label: "26 – 100 employees (Fast Growing)", value: "26-100" },
  { label: "101 – 500 employees (Mid-Market)", value: "101-500" },
  { label: "501 – 1,000 employees (Large Business)", value: "501-1000" },
  { label: "1,000+ employees (Global Enterprise)", value: "1000+" },
];

export const MODULE_OPTIONS = [
  "Core HR & Directory",
  "Payroll & Statutory Compliance",
  "Time & Attendance Tracking",
  "Performance & OKR Reviews",
  "Talent Acquisition & Hiring",
  "Employee Self-Service (ESS)",
  "Full End-to-End HCM Suite",
];

export const CONTACT_FAQS: ContactFAQ[] = [
  {
    question: "What happens during a PeoplesHR product demo?",
    answer:
      "Our solutions architect conducts a live 30-minute tailored walkthrough configured for your specific industry and workforce challenges. You'll experience real payroll flows, attendance tracking, and self-service portals, followed by a dedicated Q&A session.",
  },
  {
    question: "Can I invite other team members or leadership to the demo?",
    answer:
      "Yes, absolutely. We encourage bringing HR directors, payroll accountants, IT admins, and C-suite sponsors. When you submit your request, you can forward the calendar invitation or invite colleagues directly.",
  },
  {
    question: "Do you offer a sandbox or trial environment after the demo?",
    answer:
      "Yes! After the walkthrough, we can provision a dedicated, sandbox instance pre-populated with realistic workforce data so your team can test permissions, approvals, and workflows firsthand.",
  },
  {
    question: "How long does implementation and employee data migration take?",
    answer:
      "Depending on company size and chosen modules, standard deployment takes 2 to 4 weeks. Our dedicated implementation engineering team manages historical data migration, statutory tax setup, and parallel payroll runs.",
  },
  {
    question: "Is our employee data secure and compliant?",
    answer:
      "PeoplesHR is SOC 2 Type II certified, ISO 27001 compliant, and GDPR aligned. All client data is encrypted with AES-256 at rest and TLS 1.3 in transit with automated redundancy and 99.98% uptime SLA.",
  },
];

export const TRUST_BADGES = [
  { label: "SOC 2 Type II Certified", description: "Independently audited data security" },
  { label: "ISO 27001", description: "Information security management" },
  { label: "99.98% SLA", description: "High availability enterprise cloud" },
  { label: "GDPR Compliant", description: "Global privacy & governance" },
];
