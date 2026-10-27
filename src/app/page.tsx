import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustedPartiesSection from "@/components/TrustedPartiesSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import ThriveSection from "@/components/ThriveSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CustomFAQPageJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";
import { SEO_DEFAULTS } from "@/lib/seo";

const HOME_FAQS = [
  {
    question: "What is PeoplesHR Cloud HCM Platform?",
    answer:
      "PeoplesHR is an enterprise cloud Human Capital Management (HCM) software that unifies core HR, automated statutory payroll, real-time time & attendance, performance appraisals, and employee self-service into an intuitive, secure platform.",
  },
  {
    question: "How does PeoplesHR automate payroll and tax compliance?",
    answer:
      "PeoplesHR automatically calculates statutory taxes, deductions, overtime, bonuses, and allowances with zero spreadsheet formulas. It generates compliant payslips and banking payment files in seconds.",
  },
  {
    question: "Can employees access payslips and request leave on mobile?",
    answer:
      "Yes. The PeoplesHR Employee Self-Service (ESS) mobile app and web portal allow staff to view real-time pay stubs, apply for time off, check leave balances, and clock attendance on iOS and Android.",
  },
  {
    question: "How secure is workforce and financial data in PeoplesHR?",
    answer:
      "PeoplesHR adheres to bank-grade encryption (AES-256), ISO 27001 certified data security standards, SOC 2 compliance, and role-based access controls to safeguard all sensitive employee and corporate data.",
  },
  {
    question: "How long does implementation take for enterprise companies?",
    answer:
      "Typical cloud rollout takes 2 to 4 weeks depending on headcount and system integrations. Our dedicated solution architects assist with historical data migration, policy configuration, and team training.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <CustomWebPageJsonLd
        title="PeoplesHR | Cloud Human Capital Management & Payroll Platform"
        description={SEO_DEFAULTS.defaultDescription}
        url="/"
      />
      <CustomFAQPageJsonLd mainEntity={HOME_FAQS} />
      <HeroSection />
      <TrustedPartiesSection />
      <ServicesSection />
      <ThriveSection />
      <PackagesSection />
      <HoursLeakCalculatorSection />
      <TestimonialsSection />
    </div>
  );
}


