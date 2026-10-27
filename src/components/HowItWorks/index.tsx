"use client";

import React from "react";
import HowItWorksCarousel from "./HowItWorksCarousel";
import {
  HOW_IT_WORKS_CONTENT,
  HOW_IT_WORKS_STEPS,
} from "@/constants/howItWorks";
import Badge from "@/components/ui/Badge";
import {
  SparklesIcon,
  UserSolidIcon,
  BarChartSolidIcon,
  HeartSolidIcon,
} from "@/components/ui/icons";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";

export function HowItWorks() {
  const renderFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case "user":
        return <UserSolidIcon className="w-5 h-5 text-primary" />;
      case "barchart":
        return <BarChartSolidIcon className="w-5 h-5 text-primary" />;
      case "heart":
        return <HeartSolidIcon className="w-5 h-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <span id="thrive" className="sr-only" aria-hidden="true" />
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 xl:gap-16">
          {/* Left Column: Image Carousel with smooth entrance from left */}
          <MotionDiv
            delay={0.1}
            duration={0.7}
            yOffset={0}
            xOffset={-30}
            className="lg:col-span-6 w-full"
          >
            <HowItWorksCarousel />
          </MotionDiv>

          {/* Right Column: Content with staggered entrance */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start">
            {/* Eyebrow Pill Badge */}
            <MotionDiv delay={0.1} duration={0.5} yOffset={15}>
              <Badge
                variant="primary"
                icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
                className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider"
              >
                {HOW_IT_WORKS_CONTENT.eyebrow}
              </Badge>
            </MotionDiv>

            {/* Main Headline */}
            <MotionH2
              delay={0.2}
              duration={0.65}
              yOffset={20}
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.18] text-slate-900"
            >
              <span>{HOW_IT_WORKS_CONTENT.titlePart1}</span>
              <span className="text-primary">{HOW_IT_WORKS_CONTENT.titleHighlight}</span>
            </MotionH2>

            {/* Description Paragraph */}
            <MotionP
              delay={0.3}
              duration={0.6}
              yOffset={15}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              {HOW_IT_WORKS_CONTENT.description}
            </MotionP>

            {/* 3 Step Feature Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 w-full">
              {HOW_IT_WORKS_STEPS.map((step, idx) => (
                <MotionDiv
                  key={step.id}
                  delay={0.35 + idx * 0.1}
                  duration={0.5}
                  yOffset={15}
                  className="flex flex-col p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-slate-200/80 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF3FD] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {renderFeatureIcon(step.iconType)}
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Step {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-1">
                    {step.subtitle}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HowItWorks as Thrive };
export default HowItWorks;
