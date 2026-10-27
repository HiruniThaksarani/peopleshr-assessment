import type { Metadata } from "next";
import React, { Suspense } from "react";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "HR ROI & Hours Leak Calculator | PeoplesHR Platform",
  description:
    "Calculate the true financial and administrative cost of manual HR, spreadsheets, and fragmented payroll with the PeoplesHR ROI calculator.",
};

export default function CalculatorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
      <Calculator />
    </Suspense>
  );
}
