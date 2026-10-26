import type { Metadata } from "next";
import React, { Suspense } from "react";
import PackagesPage from "@/components/PackagesPage";

export const metadata: Metadata = {
  title: "Solution Packages & Bundles | PeoplesHR Platform",
  description:
    "Explore our complete suite of pre-configured HR solution packages: Foundation, Growth, Professional, and Enterprise with full service alignment.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
      <PackagesPage />
    </Suspense>
  );
}
