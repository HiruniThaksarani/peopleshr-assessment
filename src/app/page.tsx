import React from "react";
import HeroSection from "@/components/HeroSection";
import HoursLeakCalculatorSection from "@/components/HoursLeakCalculatorSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <HoursLeakCalculatorSection />
    </div>
  );
}

