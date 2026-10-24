import React from "react";
import HeroSection from "@/components/HeroSection";
import PeopleOperationsSection from "@/components/PeopleOperationsSection";
import ThriveSection from "@/components/ThriveSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <PeopleOperationsSection />
      <ThriveSection />
      <HoursLeakCalculatorSection />
      <TestimonialsSection />
    </div>
  );
}


