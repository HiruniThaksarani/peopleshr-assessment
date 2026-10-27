export interface FAQItem {
  id: string;
  category: "Platform & Capabilities" | "Payroll & Compliance" | "Security & Mobile" | "Rollout & Scaling";
  question: string;
  answer: string;
}

export const FAQ_CONTENT = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  titlePart1: "Got Questions? ",
  titleHighlight: "We've Got Answers.",
  subtitle:
    "Everything you need to know about PeoplesHR platform capabilities, multi-country statutory payroll compliance, security standards, and cloud rollout.",
  supportCta: {
    title: "Still have questions about your HR setup?",
    subtitle: "Our solution architects are ready to evaluate your workforce structure and demonstrate live workflows.",
    primaryButtonText: "Request a Custom Demo",
    primaryButtonHref: "/contact",
    secondaryButtonText: "Explore HR Stack Builder",
    secondaryButtonHref: "/packages/stack-builder",
  },
};

export const HOME_FAQS: FAQItem[] = [
  {
    id: "platform-overview",
    category: "Platform & Capabilities",
    question: "What is PeoplesHR Cloud HCM Platform?",
    answer:
      "PeoplesHR is an enterprise cloud Human Capital Management (HCM) software that unifies core HR, automated statutory payroll, real-time time & attendance, performance appraisals, and employee self-service into an intuitive, secure platform trusted by over 1,400+ organizations across 40+ countries.",
  },
  {
    id: "payroll-compliance",
    category: "Payroll & Compliance",
    question: "How does PeoplesHR automate payroll and statutory compliance?",
    answer:
      "PeoplesHR automatically calculates statutory taxes (EPF, ETF, PAYE/APIT, and regional tax deductions), overtime, allowances, bonuses, and loan deductions with zero manual spreadsheets. It generates bank-ready electronic salary files, direct statutory compliance slips, and detailed audit trails in seconds.",
  },
  {
    id: "mobile-self-service",
    category: "Security & Mobile",
    question: "Can employees access payslips and request leave on mobile?",
    answer:
      "Yes. The PeoplesHR Employee Self-Service (ESS) mobile app and web portal allow staff to view real-time pay stubs, apply for time off, check leave balances, submit expense claims, and clock attendance via geofenced mobile check-ins on both iOS and Android.",
  },
  {
    id: "data-security",
    category: "Security & Mobile",
    question: "How secure is workforce and financial data in PeoplesHR?",
    answer:
      "PeoplesHR adheres to bank-grade encryption (AES-256 for data at rest and TLS 1.3 for data in transit), ISO 27001 certified data security standards, SOC 2 Type II compliance, and granular role-based access controls to safeguard all sensitive employee and corporate data.",
  },
  {
    id: "integrations-biometrics",
    category: "Platform & Capabilities",
    question: "Can PeoplesHR integrate with our existing ERP and biometric devices?",
    answer:
      "Yes. PeoplesHR features open REST APIs and pre-built connectors for major ERPs (such as SAP, Oracle, NetSuite, Microsoft Dynamics), accounting packages, and standard biometric or RFID hardware devices for seamless attendance and financial synchronization.",
  },
];
