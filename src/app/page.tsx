import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustedPartiesSection from "@/components/TrustedPartiesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PackagesSection from "@/components/PackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import { CustomFAQPageJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";
import { constructMetadata, SEO_DEFAULTS } from "@/lib/seo";
import { HOME_FAQS } from "@/constants/faq";

export const metadata: Metadata = constructMetadata({
  title: "PeoplesHR | Cloud HR, Payroll & Workforce Management Software",
  description:
    "Simplify HR management for growing businesses. PeoplesHR unifies employee records, statutory payroll, time and attendance, self-service, and people analytics in one cloud platform.",
  canonical: "/",
  keywords: [
    "HR software",
    "cloud HCM",
    "payroll software",
    "employee management",
    "time and attendance",
  ],
});

export default function Home() {
  return (
    <div className="w-full">
      <CustomWebPageJsonLd
        title="PeoplesHR | Cloud HR, Payroll & Workforce Management Software"
        description={SEO_DEFAULTS.defaultDescription}
        url="/"
      />
      <CustomFAQPageJsonLd mainEntity={HOME_FAQS} />
      <HeroSection />
      <TrustedPartiesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PackagesSection />
      <HoursLeakCalculatorSection />
      <TestimonialsSection />
      <div id="faq">
        <FAQSection />
      </div>
    </div>
  );
}


