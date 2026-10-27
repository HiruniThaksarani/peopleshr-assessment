import type { Metadata } from "next";
import React, { Suspense } from "react";
import ServicesPage from "@/components/Services";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "Enterprise Cloud HR Services & Workforce Solutions | PeoplesHR",
  description:
    "Explore PeoplesHR's modular cloud services: Core HR directory, automated payroll & tax calculations, real-time time & attendance, talent performance, and workforce analytics.",
  canonical: "/services",
  keywords: [
    "Enterprise HR services",
    "Cloud payroll solutions",
    "Employee self service portal",
    "Attendance tracking software",
    "Workforce analytics tools",
    "Performance appraisal software",
  ],
});

const HR_SERVICES_CATALOG = [
  {
    name: "Core HR & Employee Directory",
    description: "Centralized employee profiles, automated document storage, and organizational hierarchy charts.",
  },
  {
    name: "Automated Payroll & Statutory Compliance",
    description: "Multi-country tax rule engines, direct salary bank transfers, and automated statutory tax slip generation.",
  },
  {
    name: "Time & Attendance Tracking",
    description: "Biometric and mobile clock-in, overtime rule automation, and shift scheduling.",
  },
  {
    name: "Performance & Goal Management",
    description: "360-degree feedback, continuous appraisal cycles, and KPI alignment frameworks.",
  },
  {
    name: "Employee Self-Service (ESS)",
    description: "Mobile and web portal for leave requests, pay stub downloads, and personal info updates.",
  },
  {
    name: "People Analytics & Workforce Insights",
    description: "Turnover risk predictions, compensation benchmarking, and real-time executive workforce dashboards.",
  },
];

export default function Services() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "HR Services", url: "/services" },
        ]}
      />
      <CustomServiceJsonLd
        name="PeoplesHR Enterprise HCM Services"
        description="Full suite of modular cloud HR, automated payroll, time, performance, and workforce compliance services."
        url="/services"
        offers={HR_SERVICES_CATALOG}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <ServicesPage mode="services" />
      </Suspense>
    </>
  );
}
