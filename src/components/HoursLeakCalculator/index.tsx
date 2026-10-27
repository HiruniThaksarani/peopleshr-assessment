"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalculatorIcon,
  ClockIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  TrendingUpIcon,
  CoinsStackIcon,
  FileTextIcon,
  CalendarIcon,
  UsersIcon,
  ReceiptIcon,
  ArrowRightIcon,
  BarChartAscendingIcon,
  InfoIcon,
} from "@/components/ui/icons";
import { CALCULATOR_CONTENT } from "@/constants/calculator";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import HoursLeakStatCard from "./HoursLeakStatCard";
import Calculator3DGraphic from "./Calculator3DGraphic";

import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";
import { motion } from "framer-motion";

export function HoursLeakCalculator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(1); // Default to Benchmark (100 – 250)

  const activeTier = CALCULATOR_CONTENT.companyTiers[selectedTierIndex];

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return <ClockIcon className="w-5 h-5 text-primary stroke-[2.2]" />;
      case "chart":
        return <BarChartAscendingIcon className="w-5 h-5 text-primary" />;
      case "users":
        return <UsersIcon className="w-5 h-5 text-primary stroke-[2.2]" />;
      default:
        return <ClockIcon className="w-5 h-5 text-primary stroke-[2.2]" />;
    }
  };

  const renderAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "file-text":
        return <FileTextIcon className="w-4 h-4 text-primary" />;
      case "calendar":
        return <CalendarIcon className="w-4 h-4 text-primary" />;
      case "users":
        return <UsersIcon className="w-4 h-4 text-primary" />;
      case "receipt":
        return <ReceiptIcon className="w-4 h-4 text-primary" />;
      case "shield-check":
        return <ShieldCheckIcon className="w-4 h-4 text-primary" />;
      default:
        return <FileTextIcon className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section
      id="hours-calculator"
      className="relative w-full py-14 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, features, CTA button & 3D visual */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <MotionDiv delay={0} duration={0.5} yOffset={15}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 shadow-2xs mb-6 self-start">
                  <CalculatorIcon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-bold text-primary tracking-wider uppercase">
                    {CALCULATOR_CONTENT.eyebrow}
                  </span>
                </div>
              </MotionDiv>

              {/* Headline */}
              <MotionH2
                delay={0.1}
                duration={0.65}
                yOffset={20}
                className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.14]"
              >
                {CALCULATOR_CONTENT.titlePart1}{" "}
                <span className="text-primary block sm:inline">
                  {CALCULATOR_CONTENT.titleHighlight}
                </span>
              </MotionH2>

              {/* Subtitle */}
              <MotionP
                delay={0.2}
                duration={0.6}
                yOffset={15}
                className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
              >
                {CALCULATOR_CONTENT.subtitle}
              </MotionP>

              {/* 3 Value Proposition Features with stagger */}
              <div className="mt-8 flex flex-col gap-4 sm:gap-5">
                {CALCULATOR_CONTENT.features.map((feat, idx) => (
                  <MotionDiv
                    key={feat.title}
                    delay={0.25 + idx * 0.08}
                    duration={0.5}
                    yOffset={15}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                      {renderFeatureIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                        {feat.subtitle}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Bottom Row: CTA Button + 3D Graphic */}
            <MotionDiv
              delay={0.4}
              duration={0.6}
              yOffset={20}
              className="mt-9 sm:mt-11 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 relative"
            >
              <Button asChild size="lg" className="shrink-0">
                <Link href={CALCULATOR_CONTENT.ctaPrimary.href}>
                  <span>{CALCULATOR_CONTENT.ctaPrimary.label}</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>

              {/* 3D Dashboard Chart Graphic */}
              <div className="relative w-44 sm:w-52 lg:w-56 -my-6 shrink-0 hidden sm:block">
                <Calculator3DGraphic />
              </div>
            </MotionDiv>
          </div>

          {/* Right Column: Calculator Card */}
          <MotionDiv
            delay={0.15}
            duration={0.7}
            yOffset={30}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_60px_-15px_rgba(13,91,189,0.08)] border border-slate-100 flex flex-col justify-between">
              {/* Card Header: Team size selector */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Select your team size
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Choose the number of employees to see your estimated impact.
                </p>

                {/* Team size buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5">
                  {CALCULATOR_CONTENT.companyTiers.map((tier, idx) => {
                    const isSelected = selectedTierIndex === idx;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierIndex(idx)}
                        className={cn(
                          "py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 text-center cursor-pointer active:scale-95",
                          isSelected
                            ? "bg-primary text-white shadow-xs font-semibold scale-[1.02]"
                            : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60 font-medium"
                        )}
                      >
                        {tier.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3 Metric Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
                <HoursLeakStatCard
                  label="Hours saved per year"
                  value={activeTier.hoursLost}
                  subtext={`Equivalent to ${activeTier.fteEquivalent}`}
                  icon={<ClockIcon className="w-4 h-4 stroke-[2.2]" />}
                  color="rose"
                />
                <HoursLeakStatCard
                  label="Potential value per year"
                  value={activeTier.potentialValue}
                  subtext="Based on industry benchmark"
                  icon={<CoinsStackIcon className="w-4 h-4 stroke-[2.2]" />}
                  color="emerald"
                />
                <HoursLeakStatCard
                  label="Projected ROI"
                  value={activeTier.projectedRoi}
                  subtext="Over 3 years"
                  icon={<TrendingUpIcon className="w-4 h-4 stroke-[2.2]" />}
                  color="purple"
                />
              </div>

              {/* Where time is currently lost breakdown */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    Where time is currently lost
                  </h4>
                  <div className="flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500 bg-slate-100/90 px-3 py-1 rounded-full">
                      Based on industry benchmark data
                    </span>
                    <button
                      type="button"
                      title="Industry benchmark assumptions"
                      aria-label="Industry benchmark assumptions"
                      className="text-primary hover:text-blue-700 transition-colors p-0.5 cursor-pointer"
                    >
                      <InfoIcon className="w-4 h-4 text-primary shrink-0" />
                    </button>
                  </div>
                </div>

                {/* 5 Progress Bars with Animated Fill */}
                <div className="flex flex-col gap-3.5 mt-2">
                  {CALCULATOR_CONTENT.commonAreas.items.map((item, idx) => (
                    <div key={item.id} className="flex items-center gap-3 sm:gap-4">
                      <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                        {renderAreaIcon(item.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 w-36 sm:w-44 shrink-0 truncate">
                        {item.label}
                      </span>
                      <div className="flex-1 h-3 sm:h-3.5 bg-[#eef4fe] rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.hoursPercentage}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + idx * 0.08,
                            ease: [0.21, 0.47, 0.32, 0.98],
                          }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 w-9 text-right shrink-0">
                        {item.hoursPercentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <LightbulbIcon className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{CALCULATOR_CONTENT.footerNote}</span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

export default HoursLeakCalculator;
