import type { Metadata } from "next";
import React, { Suspense } from "react";
import PackagesPage from "@/components/PackagesPage";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomProductJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "HR Solution Packages & Pricing Bundles | PeoplesHR Platform",
  description:
    "Explore PeoplesHR's modular solution tiers: Foundation, Growth, Professional, and Enterprise. Scalable cloud HR and payroll bundles tailored for teams of 20 to 10,000+.",
  canonical: "/packages",
  keywords: [
    "HR software pricing",
    "PeoplesHR packages",
    "Cloud HCM tiers",
    "Payroll software bundle",
    "Enterprise HR packages",
    "Employee self-service packages",
  ],
});

const PACKAGES_DATA = [
  {
    name: "Foundation Tier",
    description: "Core digital HR infrastructure, employee directory, leave management, and company document hub.",
    url: "/packages#foundation",
    price: "4.50",
  },
  {
    name: "Growth Tier",
    description: "Complete payroll calculation automation, biometric attendance integration, and employee self-service mobile app.",
    url: "/packages#growth",
    price: "8.00",
  },
  {
    name: "Professional Tier",
    description: "Continuous performance appraisals, OKR tracking, advanced shift scheduling, and recruitment pipeline.",
    url: "/packages#professional",
    price: "12.50",
  },
  {
    name: "Enterprise Tier",
    description: "Full-spectrum human capital management, predictive people analytics, dedicated customer success manager, and custom SLA.",
    url: "/packages#enterprise",
    price: "18.00",
  },
];

export default function Page() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Solution Packages", url: "/packages" },
        ]}
      />
      <CustomProductJsonLd packages={PACKAGES_DATA} />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <PackagesPage />
      </Suspense>
    </>
  );
}
