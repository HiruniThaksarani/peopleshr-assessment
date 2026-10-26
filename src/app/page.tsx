import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import ThriveSection from "@/components/ThriveSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <ThriveSection />
      <PackagesSection />
      <HoursLeakCalculatorSection />
      <TestimonialsSection />
    </div>
  );
}


