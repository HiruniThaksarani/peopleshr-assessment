import type { Metadata } from "next";
import React, { Suspense } from "react";
import ServicesPage from "@/components/Services";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "HR Software Features: Payroll, ESS, Talent & Analytics | PeoplesHR",
  description:
    "Explore PeoplesHR platform features: HR Essentials, payroll and time, employee self-service, talent and performance, people insights, and compliance for growing businesses.",
  canonical: "/features",
  keywords: [
    "Enterprise HR features",
    "Cloud payroll solutions",
    "Employee self service portal",
    "Attendance tracking software",
    "Workforce analytics tools",
    "Performance appraisal software",
  ],
});

const HR_FEATURES_CATALOG = [
  {
    name: "HR Essentials",
    description: "Employee information, organisational structure, and document management.",
  },
  {
    name: "Payroll & Time",
    description: "Payroll processing, time and attendance, and leave management.",
  },
  {
    name: "People Experience",
    description: "Employee self-service, requests and approvals, and mobile access.",
  },
  {
    name: "Talent & Performance",
    description: "Recruitment and onboarding, performance management, and learning support.",
  },
  {
    name: "People Insights",
    description: "Interactive dashboards, workforce analytics, and custom reports.",
  },
  {
    name: "Compliance & Workforce",
    description: "Regulatory compliance, policy management, and multi-country support.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Features", url: "/features" },
        ]}
      />
      <CustomServiceJsonLd
        name="PeoplesHR Enterprise HCM Features"
        description="Full suite of modular cloud HR, automated payroll, time, performance, and workforce compliance features."
        url="/features"
        offers={HR_FEATURES_CATALOG}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <ServicesPage mode="features" />
      </Suspense>
    </>
  );
}
