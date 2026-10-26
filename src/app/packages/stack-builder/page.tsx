import type { Metadata } from "next";
import React, { Suspense } from "react";
import StackBuilder from "@/components/StackBuilder";

export const metadata: Metadata = {
  title: "HR Stack Builder | PeoplesHR Cloud Platform",
  description:
    "Build the right HR stack for your business. Explore solution packages or get a personalised recommendation based on your business size, industry and priorities.",
};

export default function StackBuilderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
      <StackBuilder initialView="wizard" />
    </Suspense>
  );
}
