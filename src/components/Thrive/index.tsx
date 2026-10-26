"use client";

import React from "react";
import ThriveCarousel from "./ThriveCarousel";
import {
  THRIVE_CONTENT,
  THRIVE_PILL_FEATURES,
} from "@/constants/thrive";
import Badge from "@/components/ui/Badge";
import {
  SparklesIcon,
  UserSolidIcon,
  BarChartSolidIcon,
  HeartSolidIcon,
} from "@/components/ui/icons";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";

export function Thrive() {
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
      id="thrive"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
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
            <ThriveCarousel />
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
                {THRIVE_CONTENT.eyebrow}
              </Badge>
            </MotionDiv>

            {/* Main Headline */}
            <MotionH2
              delay={0.2}
              duration={0.65}
              yOffset={20}
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.18] text-slate-900"
            >
              <span>{THRIVE_CONTENT.titlePart1}</span>
              <span className="text-primary">{THRIVE_CONTENT.titleHighlight}</span>
            </MotionH2>

            {/* Description Paragraph */}
            <MotionP
              delay={0.3}
              duration={0.6}
              yOffset={15}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              {THRIVE_CONTENT.description}
            </MotionP>

            {/* 3 Horizontal Pill Features with stagger */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 lg:gap-4 pt-2 w-full">
              {THRIVE_PILL_FEATURES.map((feat, idx) => (
                <MotionDiv
                  key={feat.id}
                  delay={0.35 + idx * 0.1}
                  duration={0.5}
                  yOffset={15}
                  className="flex items-center gap-3 p-1.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EBF3FD] flex items-center justify-center shrink-0 shadow-2xs">
                    {renderFeatureIcon(feat.iconType)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      {feat.title}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                      {feat.subtitle}
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Thrive;
