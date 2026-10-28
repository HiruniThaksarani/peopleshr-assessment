export type FeatureSlug =
  | "hr-essentials"
  | "payroll-time"
  | "people-experience"
  | "talent-performance"
  | "people-insights"
  | "compliance-workforce";

export interface FeatureFaq {
  question: string;
  answer: string;
}

export interface FeaturePageContent {
  slug: FeatureSlug;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  headline: string;
  summary: string;
  problem: string;
  whoBenefits: string[];
  capabilities: string[];
  howItWorks: { step: string; detail: string }[];
  benefits: string[];
  relatedSlugs: FeatureSlug[];
  packages: string[];
  faqs: FeatureFaq[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const FEATURE_SLUGS: FeatureSlug[] = [
  "hr-essentials",
  "payroll-time",
  "people-experience",
  "talent-performance",
  "people-insights",
  "compliance-workforce",
];

export const FEATURE_PAGES: Record<FeatureSlug, FeaturePageContent> = {
  "hr-essentials": {
    slug: "hr-essentials",
    name: "HR Essentials",
    shortName: "Core HR",
    metaTitle: "Core HR & Employee Management Software | PeoplesHR",
    metaDescription:
      "Centralize employee information, organisational structure, and digital documents with PeoplesHR HR Essentials. One source of truth for workforce records.",
    keywords: [
      "employee management software",
      "core HR system",
      "digital employee records",
      "organisational structure software",
    ],
    eyebrow: "CORE HR MODULE",
    headline: "Keep every employee record accurate and easy to find",
    summary:
      "HR Essentials gives HR teams a single place to manage employee information, organisational structure, and digital documents—so hiring, transfers, and audits no longer rely on scattered spreadsheets.",
    problem:
      "Growing businesses often store employee data across spreadsheets, shared drives, and email. That slows onboarding, creates duplicate records, and makes organisational changes hard to track.",
    whoBenefits: [
      "HR administrators who maintain employee files day to day",
      "People leaders who need a clear view of teams and reporting lines",
      "Business owners replacing paper or spreadsheet-based HR",
    ],
    capabilities: [
      "Employee information and digital personnel records",
      "Organisational structure and reporting hierarchies",
      "Document management for contracts, policies, and HR files",
      "Foundation for payroll, leave, and self-service workflows",
    ],
    howItWorks: [
      {
        step: "Capture employee profiles",
        detail:
          "Store personal, role, and employment details in structured digital records instead of disconnected files.",
      },
      {
        step: "Map your organisation",
        detail:
          "Define teams, departments, and reporting relationships so managers and HR share the same structure.",
      },
      {
        step: "Store documents securely",
        detail:
          "Keep employment documents with the employee record for faster retrieval during reviews and audits.",
      },
    ],
    benefits: [
      "Reduce time spent searching for employee information",
      "Support cleaner payroll and leave processes with accurate master data",
      "Give managers a clearer view of who reports where",
    ],
    relatedSlugs: ["payroll-time", "people-experience", "compliance-workforce"],
    packages: ["Foundation", "Growth", "Enterprise"],
    faqs: [
      {
        question: "What does HR Essentials include?",
        answer:
          "HR Essentials covers employee information, organisational structure, and document management—the core records layer used across PeoplesHR modules.",
      },
      {
        question: "Is HR Essentials available on every package?",
        answer:
          "Yes. Foundation, Growth, and Enterprise all include Core HR and digital employee records as a starting capability.",
      },
      {
        question: "How does this connect to payroll and leave?",
        answer:
          "Payroll, time, leave, and self-service workflows use the same employee records, so updates made in HR Essentials flow into day-to-day people operations.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Build Your HR Stack", href: "/packages/stack-builder" },
  },
  "payroll-time": {
    slug: "payroll-time",
    name: "Payroll & Time",
    shortName: "Payroll",
    metaTitle: "Payroll, Time & Leave Management Software | PeoplesHR",
    metaDescription:
      "Run statutory payroll, track time and attendance, and manage leave approvals in one PeoplesHR module built for accurate, audit-ready pay cycles.",
    keywords: [
      "payroll software",
      "time and attendance",
      "leave management software",
      "statutory payroll",
    ],
    eyebrow: "PAYROLL & TIME MODULE",
    headline: "Run payroll, attendance, and leave from one workflow",
    summary:
      "Payroll & Time helps teams process pay runs, track attendance, and approve leave without juggling separate tools—supporting statutory calculations such as EPF, ETF, and PAYE/APIT where configured.",
    problem:
      "Manual payroll checks, attendance disputes, and leave reconciliations consume hours every cycle and increase the risk of pay errors and rework.",
    whoBenefits: [
      "Payroll officers preparing recurring pay runs",
      "HR teams reconciling leave balances and attendance",
      "Finance leaders who need cleaner statutory outputs",
    ],
    capabilities: [
      "Payroll processing with statutory compliance support",
      "Time and attendance tracking",
      "Leave and absence approval workflows",
      "Bank-ready salary file generation and audit trails",
    ],
    howItWorks: [
      {
        step: "Collect time and leave data",
        detail:
          "Capture attendance and approved leave so pay inputs stay aligned with actual worked time.",
      },
      {
        step: "Calculate the pay run",
        detail:
          "Process salaries with overtime, allowances, deductions, and configured statutory calculations.",
      },
      {
        step: "Publish payslips and files",
        detail:
          "Generate payslips, electronic salary files, and audit-ready records for finance and compliance teams.",
      },
    ],
    benefits: [
      "Cut spreadsheet-heavy payroll preparation",
      "Reduce attendance and leave disputes before pay day",
      "Support statutory reporting with clearer audit trails",
    ],
    relatedSlugs: ["hr-essentials", "people-experience", "compliance-workforce"],
    packages: ["Foundation", "Growth", "Enterprise"],
    faqs: [
      {
        question: "Does PeoplesHR support statutory payroll deductions?",
        answer:
          "Yes. PeoplesHR can calculate statutory taxes and deductions such as EPF, ETF, and PAYE/APIT, along with overtime, allowances, bonuses, and loan deductions when configured for your workforce.",
      },
      {
        question: "Can leave and attendance feed into payroll?",
        answer:
          "Time & attendance and leave workflows are part of the same Payroll & Time module so approved absences and attendance data can support pay calculations.",
      },
      {
        question: "Which packages include payroll?",
        answer:
          "Automated payroll and statutory compliance are included from Foundation upward, with richer multi-country and multi-currency payroll on Enterprise.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Estimate HR ROI", href: "/calculator" },
  },
  "people-experience": {
    slug: "people-experience",
    name: "People Experience",
    shortName: "ESS",
    metaTitle: "Employee Self-Service Portal & Mobile HR Access | PeoplesHR",
    metaDescription:
      "Give employees self-service for leave, payslips, and requests with PeoplesHR People Experience—web and mobile access that reduces HR ticket volume.",
    keywords: [
      "employee self-service",
      "ESS portal",
      "mobile HR app",
      "leave request software",
    ],
    eyebrow: "EMPLOYEE SELF-SERVICE",
    headline: "Let employees handle everyday HR requests themselves",
    summary:
      "People Experience provides employee self-service, request and approval flows, and mobile access so staff can view payslips, request leave, and update information without emailing HR for every task.",
    problem:
      "When employees depend on HR for payslips, leave balances, and routine updates, service queues grow and HR teams spend time on repetitive requests instead of higher-value work.",
    whoBenefits: [
      "Employees who need fast access to payslips and leave",
      "Managers who approve requests in one place",
      "HR teams reducing repetitive admin tickets",
    ],
    capabilities: [
      "Employee self-service portal",
      "Requests and approvals for everyday HR actions",
      "Mobile access on iOS and Android (Growth and above)",
      "Visibility into payslips, leave balances, and personal info updates",
    ],
    howItWorks: [
      {
        step: "Employees submit requests",
        detail:
          "Staff use web or mobile self-service to request leave, check balances, and access payslips.",
      },
      {
        step: "Managers approve in workflow",
        detail:
          "Approvals follow defined paths so managers and HR see the same request status.",
      },
      {
        step: "Records stay up to date",
        detail:
          "Approved actions update leave and employee records used by payroll and HR operations.",
      },
    ],
    benefits: [
      "Fewer repetitive HR inbox requests",
      "Faster leave and information access for employees",
      "Clearer approval trails for managers",
    ],
    relatedSlugs: ["payroll-time", "hr-essentials", "people-insights"],
    packages: ["Foundation", "Growth", "Enterprise"],
    faqs: [
      {
        question: "What can employees do in self-service?",
        answer:
          "Employees can view pay stubs, apply for time off, check leave balances, submit expense claims, and clock attendance via geofenced mobile check-ins on supported web and mobile experiences.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Native iOS and Android employee self-service access is included from the Growth package upward. Foundation includes the ESS portal for core self-service needs.",
      },
      {
        question: "Does self-service replace HR approvals?",
        answer:
          "No. Employees initiate requests; managers and HR still approve according to your configured workflows.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Compare Packages", href: "/packages" },
  },
  "talent-performance": {
    slug: "talent-performance",
    name: "Talent & Performance",
    shortName: "Talent",
    metaTitle: "Recruitment, Onboarding & Performance Management | PeoplesHR",
    metaDescription:
      "Manage recruitment pipelines, onboarding, and performance appraisals with PeoplesHR Talent & Performance—built for growing teams that need structured people development.",
    keywords: [
      "recruitment software",
      "performance management",
      "employee onboarding",
      "appraisal software",
    ],
    eyebrow: "TALENT & PERFORMANCE",
    headline: "Hire, onboard, and review people in one connected flow",
    summary:
      "Talent & Performance helps growing organisations run recruitment and onboarding, manage performance appraisals, and support learning and development without disconnected hiring and review tools.",
    problem:
      "When hiring pipelines, onboarding checklists, and performance reviews live in separate systems, managers lose context and new-hire productivity slows down.",
    whoBenefits: [
      "Talent and recruiting teams managing applicant pipelines",
      "Managers running structured performance conversations",
      "HR leaders connecting hiring outcomes to retention",
    ],
    capabilities: [
      "Recruitment and applicant pipeline",
      "Onboarding workflows for new hires",
      "Performance management and appraisals",
      "Learning and development support",
    ],
    howItWorks: [
      {
        step: "Track candidates",
        detail:
          "Move applicants through a recruitment pipeline so hiring status is visible to recruiters and hiring managers.",
      },
      {
        step: "Onboard new hires",
        detail:
          "Hand off accepted candidates into onboarding workflows tied to employee records.",
      },
      {
        step: "Review performance",
        detail:
          "Run appraisal cycles and feedback so development conversations stay documented and actionable.",
      },
    ],
    benefits: [
      "Shorter time from offer to productive new hire",
      "Clearer performance expectations and review history",
      "Less tool-switching between recruiting and HR records",
    ],
    relatedSlugs: ["hr-essentials", "people-experience", "people-insights"],
    packages: ["Growth", "Enterprise"],
    faqs: [
      {
        question: "Which package includes talent and performance?",
        answer:
          "Recruitment pipeline and performance management are included in Growth and Enterprise. Foundation focuses on core HR, payroll, leave, attendance, and self-service.",
      },
      {
        question: "Does PeoplesHR support onboarding?",
        answer:
          "Yes. Talent & Performance includes recruitment and onboarding so new-hire setup can continue from the hiring pipeline into employee records.",
      },
      {
        question: "Can we model whether we need this module?",
        answer:
          "Use the HR Stack Builder to mark Recruitment and Performance as Must Have, Nice to Have, or Not Now and see which package fit matches your priorities.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Launch Stack Builder", href: "/packages/stack-builder" },
  },
  "people-insights": {
    slug: "people-insights",
    name: "People Insights",
    shortName: "Analytics",
    metaTitle: "HR Analytics, Dashboards & Workforce Reporting | PeoplesHR",
    metaDescription:
      "Use PeoplesHR People Insights for interactive dashboards, workforce analytics, and custom reports that help leaders see headcount, attendance, and people trends.",
    keywords: [
      "HR analytics",
      "workforce reporting",
      "people dashboards",
      "HR custom reports",
    ],
    eyebrow: "PEOPLE INSIGHTS",
    headline: "Turn workforce data into decisions you can act on",
    summary:
      "People Insights provides interactive dashboards, workforce analytics, and custom reports so HR and business leaders can monitor people operations without exporting spreadsheets for every question.",
    problem:
      "Leaders often wait for manual reports to understand headcount, attendance patterns, or payroll exceptions—delaying decisions and hiding operational drag.",
    whoBenefits: [
      "HR leaders tracking workforce trends",
      "Operations managers reviewing attendance and capacity",
      "Executives who need clearer people metrics",
    ],
    capabilities: [
      "Interactive dashboards",
      "Workforce analytics",
      "Custom reports for people operations",
      "Visibility that complements payroll, time, and talent data",
    ],
    howItWorks: [
      {
        step: "Connect operational data",
        detail:
          "Insights draw from HR, payroll, time, and related workforce activity already in PeoplesHR.",
      },
      {
        step: "Explore dashboards",
        detail:
          "Review interactive views instead of rebuilding the same spreadsheet every month.",
      },
      {
        step: "Share custom reports",
        detail:
          "Create reports that answer recurring leadership questions with consistent definitions.",
      },
    ],
    benefits: [
      "Faster answers to workforce questions",
      "Less manual report assembly",
      "Shared metrics across HR and leadership",
    ],
    relatedSlugs: ["payroll-time", "talent-performance", "compliance-workforce"],
    packages: ["Enterprise"],
    faqs: [
      {
        question: "What reporting is available before Enterprise?",
        answer:
          "Foundation includes basic reporting and document management. People Insights—interactive dashboards, workforce analytics, and custom reports—is positioned for advanced analytics needs on higher tiers such as Enterprise.",
      },
      {
        question: "Can insights help quantify administrative drag?",
        answer:
          "Yes. Pair platform reporting with the HR ROI Calculator to estimate hours lost to payroll, leave, onboarding, and statutory work before you buy.",
      },
      {
        question: "Do reports replace the need for exports?",
        answer:
          "Dashboards and custom reports reduce routine export work. Teams can still use exports where finance or auditors require them.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try ROI Calculator", href: "/calculator" },
  },
  "compliance-workforce": {
    slug: "compliance-workforce",
    name: "Compliance & Workforce",
    shortName: "Compliance",
    metaTitle: "HR Compliance & Multi-Country Workforce Software | PeoplesHR",
    metaDescription:
      "Manage regulatory compliance, policies, and multi-country workforce needs with PeoplesHR—including statutory payroll support such as EPF, ETF, and PAYE/APIT.",
    keywords: [
      "HR compliance software",
      "multi-country payroll",
      "statutory compliance",
      "workforce policy management",
    ],
    eyebrow: "COMPLIANCE & WORKFORCE",
    headline: "Stay aligned with policy and multi-country workforce rules",
    summary:
      "Compliance & Workforce helps organisations manage regulatory compliance, policy administration, and multi-country workforce needs—supporting complex payroll and audit expectations as teams expand.",
    problem:
      "As companies add locations or statutory requirements, policy exceptions and payroll rules become harder to track—raising audit risk and manual rework.",
    whoBenefits: [
      "HR and compliance teams managing policies and audits",
      "Multi-location or multi-country employers",
      "Finance partners who need clearer statutory outputs",
    ],
    capabilities: [
      "Regulatory compliance support",
      "Policy management",
      "Multi-country workforce support",
      "Statutory payroll cues such as EPF, ETF, and PAYE/APIT where configured",
    ],
    howItWorks: [
      {
        step: "Define policies and controls",
        detail:
          "Document workforce policies and access expectations so teams follow consistent rules.",
      },
      {
        step: "Apply statutory workflows",
        detail:
          "Use configured payroll and compliance processes for local statutory calculations and records.",
      },
      {
        step: "Support audits with trails",
        detail:
          "Keep approval and payroll history available for internal reviews and external checks.",
      },
    ],
    benefits: [
      "Clearer policy ownership across teams",
      "Less manual statutory rework each pay cycle",
      "Stronger readiness for multi-country growth",
    ],
    relatedSlugs: ["payroll-time", "hr-essentials", "people-insights"],
    packages: ["Growth", "Enterprise"],
    faqs: [
      {
        question: "Does PeoplesHR support Sri Lankan statutory payroll concepts?",
        answer:
          "Existing product content references statutory calculations such as EPF, ETF, and PAYE/APIT, along with LKR as a supported currency cue for Sri Lankan workforce scenarios. Confirm exact configuration in a demo.",
      },
      {
        question: "Is multi-country payroll available on every package?",
        answer:
          "Multi-country and multi-currency payroll capabilities are highlighted on the Enterprise package. Foundation and Growth cover automated payroll and statutory compliance for core deployments.",
      },
      {
        question: "Where can I learn more for Sri Lanka?",
        answer:
          "See the HR Software Sri Lanka page for local positioning, then book a demo to validate statutory setup for your organisation.",
      },
    ],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: {
      label: "HR Software Sri Lanka",
      href: "/hr-software-sri-lanka",
    },
  },
};

export function getFeaturePage(slug: string): FeaturePageContent | undefined {
  if ((FEATURE_SLUGS as string[]).includes(slug)) {
    return FEATURE_PAGES[slug as FeatureSlug];
  }
  return undefined;
}
