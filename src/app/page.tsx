import React from "react";
import HeroSection from "@/components/HeroSection";
import PeopleOperationsSection from "@/components/PeopleOperationsSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <PeopleOperationsSection />
      <HoursLeakCalculatorSection />
    </div>
  );
}


