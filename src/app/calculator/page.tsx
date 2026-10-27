import type { Metadata } from "next";
import React, { Suspense } from "react";
import Calculator from "@/components/Calculator";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "HR ROI & Hours Leak Calculator | PeoplesHR Platform",
  description:
    "Calculate the exact financial and administrative waste of manual HR processes, spreadsheets, and delayed payroll runs. Estimate your annual ROI with PeoplesHR.",
  canonical: "/calculator",
  keywords: [
    "HR ROI calculator",
    "Payroll leak calculator",
    "HR administrative cost estimator",
    "HCM software savings calculator",
  ],
});

export default function CalculatorPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "HR ROI Calculator", url: "/calculator" },
        ]}
      />
      <CustomWebPageJsonLd
        title="PeoplesHR ROI & Hours Leak Calculator"
        description="Estimate annual labor hours saved, error elimination, and net financial ROI when upgrading to PeoplesHR cloud automation."
        url="/calculator"
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <Calculator />
      </Suspense>
    </>
  );
}
