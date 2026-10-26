import type { Metadata } from "next";
import React, { Suspense } from "react";
import StackBuilder from "@/components/StackBuilder";

export const metadata: Metadata = {
  title: "HR Stack Builder Finder | PeoplesHR Platform",
  description:
    "Interactive questionnaire to discover the most relevant combination of HR modules.",
};

export default function StackBuilderFinderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
      <StackBuilder initialView="wizard" />
    </Suspense>
  );
}
