import type { Metadata } from "next";
import React, { Suspense } from "react";
import StackBuilder from "@/components/StackBuilder";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "Interactive HR Stack Builder & Recommendation Tool | PeoplesHR",
  description:
    "Design and customize your ideal HR software stack. Get tailored package recommendations based on your workforce headcount, industry requirements, and payroll complexity.",
  canonical: "/packages/stack-builder",
  keywords: [
    "HR Stack Builder",
    "HR software configurator",
    "Custom HCM package",
    "Payroll module selector",
  ],
});

export default function StackBuilderPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
          { name: "Stack Builder", url: "/packages/stack-builder" },
        ]}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <StackBuilder initialView="wizard" />
      </Suspense>
    </>
  );
}
