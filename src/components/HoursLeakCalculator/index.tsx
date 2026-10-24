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
  SparklesIcon,
  CheckCircle2Icon,
} from "@/components/ui/icons";
import { CALCULATOR_CONTENT } from "@/constants/calculator";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/Badge";
import HoursLeakStatCard from "./HoursLeakStatCard";
import LeakAreaCard from "./LeakAreaCard";

export function HoursLeakCalculator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(1); // Default to Benchmark (100 - 250)
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);

  const activeTier = CALCULATOR_CONTENT.companyTiers[selectedTierIndex];

  const renderTrustIcon = (iconName: string) => {
    switch (iconName) {
      case "calculator":
        return <CalculatorIcon className="w-4 h-4 text-primary shrink-0" />;
      case "lightbulb":
        return <LightbulbIcon className="w-4 h-4 text-amber-500 shrink-0" />;
      case "shield":
        return <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />;
      default:
        return <SparklesIcon className="w-4 h-4 text-primary shrink-0" />;
    }
  };

  const renderAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "file-text":
        return <FileTextIcon className="w-5 h-5" />;
      case "calendar":
        return <CalendarIcon className="w-5 h-5" />;
      case "users":
        return <UsersIcon className="w-5 h-5" />;
      case "receipt":
        return <ReceiptIcon className="w-5 h-5" />;
      case "shield-check":
        return <ShieldCheckIcon className="w-5 h-5" />;
      default:
        return <FileTextIcon className="w-5 h-5" />;
    }
  };

  const statCardsData = [
    {
      id: "hours",
      badgeLabel: "Wasted",
      label: "Hours lost per year",
      value: activeTier.hoursLost,
      subtext: `Equivalent to ${activeTier.fteEquivalent}`,
      icon: <ClockIcon className="w-5 h-5 stroke-[2.25]" />,
      color: "rose" as const,
    },
    {
      id: "value",
      badgeLabel: "Savings",
      label: "Potential value",
      value: activeTier.potentialValue,
      subtext: "per year (est.)",
      icon: <CoinsStackIcon className="w-5 h-5 stroke-[2.25]" />,
      color: "emerald" as const,
    },
    {
      id: "roi",
      badgeLabel: "Growth",
      label: "Projected ROI",
      value: activeTier.projectedRoi,
      subtext: "over 3 years",
      icon: <TrendingUpIcon className="w-5 h-5 stroke-[2.25]" />,
      color: "blue" as const,
    },
  ];

  return (
    <section
      id="hours-calculator"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden my-8"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/50 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-light/40 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#f8faff] via-[#f1f6fd] to-[#eaf2fc] border border-blue-100/90 p-6 sm:p-10 lg:p-12 xl:p-14 shadow-[0_20px_50px_-20px_rgba(13,91,189,0.08)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left: Overview & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <Badge
                  variant="primary"
                  icon={<CalculatorIcon className="w-3.5 h-3.5 text-primary" />}
                  className="mb-5 shadow-xs"
                >
                  {CALCULATOR_CONTENT.eyebrow}
                </Badge>

                <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]">
                  {CALCULATOR_CONTENT.titlePart1}{" "}
                  <span className="text-primary block sm:inline">
                    {CALCULATOR_CONTENT.titleHighlight}
                  </span>
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                  {CALCULATOR_CONTENT.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Button asChild size="lg">
                    <Link href="/calculator">
                      <span>{CALCULATOR_CONTENT.ctaPrimary.label}</span>
                      <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>

                  <Link
                    href={CALCULATOR_CONTENT.ctaSecondary.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors group cursor-pointer"
                  >
                    <span>{CALCULATOR_CONTENT.ctaSecondary.label}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                <div className="mt-7 flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Team Size:
                  </span>
                  <div className="inline-flex p-1 rounded-full bg-white/80 border border-blue-100 shadow-2xs backdrop-blur-xs">
                    {CALCULATOR_CONTENT.companyTiers.map((tier, idx) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierIndex(idx)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                          selectedTierIndex === idx
                            ? "bg-primary text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 pt-8 border-t border-blue-100/90 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
                {CALCULATOR_CONTENT.trustMetrics.map((metric) => (
                  <div key={metric.title} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/90 border border-blue-100 shadow-2xs flex items-center justify-center shrink-0 mt-0.5">
                      {renderTrustIcon(metric.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {metric.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                        {metric.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Metrics & Breakdown */}
            <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
              {/* Reusable Metric Cards (no design repetition) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {statCardsData.map((card) => (
                  <HoursLeakStatCard
                    key={card.id}
                    badgeLabel={card.badgeLabel}
                    label={card.label}
                    value={card.value}
                    subtext={card.subtext}
                    icon={card.icon}
                    color={card.color}
                  />
                ))}
              </div>

              {/* Common Leak Areas Card */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 sm:pb-5 border-b border-slate-100">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {CALCULATOR_CONTENT.commonAreas.heading}
                  </h3>
                  <span className="self-start sm:self-auto text-[11px] font-semibold text-primary bg-primary-light/90 px-3 py-1 rounded-full border border-blue-200/70">
                    {CALCULATOR_CONTENT.commonAreas.badge}
                  </span>
                </div>

                {/* Common Areas Grid with Reusable LeakAreaCard */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-5">
                  {CALCULATOR_CONTENT.commonAreas.items.map((item) => {
                    const isSelected = activeAreaId === item.id;
                    return (
                      <LeakAreaCard
                        key={item.id}
                        item={item}
                        icon={renderAreaIcon(item.icon)}
                        isSelected={isSelected}
                        onSelect={() =>
                          setActiveAreaId(isSelected ? null : item.id)
                        }
                        onMouseEnter={() => setActiveAreaId(item.id)}
                        onMouseLeave={() => setActiveAreaId(null)}
                      />
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>
                      {activeAreaId
                        ? CALCULATOR_CONTENT.commonAreas.items.find(
                            (a) => a.id === activeAreaId
                          )?.highlightText
                        : "Hover over any area to see automation opportunities"}
                    </span>
                  </div>
                  <Link
                    href="/calculator"
                    className="text-[11px] font-bold text-primary hover:text-primary-hover hover:underline transition-colors"
                  >
                    Calculate custom impact →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HoursLeakCalculator;
