import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustedPartiesSection from "@/components/TrustedPartiesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PackagesSection from "@/components/PackagesSection";
import ThriveSection from "@/components/ThriveSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import { CustomFAQPageJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";
import { SEO_DEFAULTS } from "@/lib/seo";
import { HOME_FAQS } from "@/constants/faq";

export default function Home() {
  return (
    <div className="w-full">
      <CustomWebPageJsonLd
        title="PeoplesHR | Cloud Human Capital Management & Payroll Platform"
        description={SEO_DEFAULTS.defaultDescription}
        url="/"
      />
      <CustomFAQPageJsonLd mainEntity={HOME_FAQS} />
      <HeroSection />
      <TrustedPartiesSection />
      <FeaturesSection />
      <ThriveSection />
      <PackagesSection />
      <HoursLeakCalculatorSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}


