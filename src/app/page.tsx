import React from "react";
import HeroSection from "@/components/HeroSection";
import PeopleOperationsSection from "@/components/PeopleOperationsSection";
import ThriveSection from "@/components/ThriveSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <PeopleOperationsSection />
      <ThriveSection />
      <HoursLeakCalculatorSection />
    </div>
  );
}


