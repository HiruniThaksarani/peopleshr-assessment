import type { Metadata } from "next";
import React, { Suspense } from "react";
import ServicesPage from "@/components/Services";

export const metadata: Metadata = {
  title: "Cloud HR Services & Solutions | PeoplesHR Platform",
  description:
    "Explore our complete suite of enterprise HR services: Core HR, Payroll & Time, People Experience, Talent & Performance, People Insights, and Compliance.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
      <ServicesPage />
    </Suspense>
  );
}
