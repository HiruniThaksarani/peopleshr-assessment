import type { Metadata } from "next";
import React, { Suspense } from "react";
import StackBuilder from "@/components/StackBuilder";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "HR Module Finder & Needs Assessment Questionnaire | PeoplesHR",
  description:
    "Take our 2-minute interactive HR questionnaire to discover the most effective combination of cloud HR and payroll modules for your organization.",
  // Same wizard UX as Stack Builder — canonicalize to avoid duplicate indexing.
  canonical: "/packages/stack-builder",
  keywords: [
    "HR needs questionnaire",
    "Find HR software",
    "HCM module assessment",
  ],
});

export default function StackBuilderFinderPage() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
          { name: "Stack Builder", url: "/packages/stack-builder" },
          { name: "Module Finder", url: "/packages/stack-builder/finder" },
        ]}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <StackBuilder initialView="wizard" />
      </Suspense>
    </>
  );
}
