import React from "react";
import Link from "next/link";
import { PACKAGES_CONTENT } from "@/constants/packages";
import {
  LayersStackIcon,
  SlidersAdjustIcon,
  ArrowRightIcon,
  BarChartAscendingIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

export function StackBuilderBanner() {
  const { stackBuilder } = PACKAGES_CONTENT;

  return (
    <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-blue-50/70 via-sky-50/40 to-indigo-50/50 border border-blue-100/90 p-6 sm:p-8 lg:p-9 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
      {/* Soft ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-6">
        {/* Left Column: Heading and Details */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-100/90 text-primary flex items-center justify-center shrink-0 shadow-2xs">
              <LayersStackIcon className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-primary tracking-wider uppercase">
              {stackBuilder.eyebrow}
            </span>
          </div>

          <h3 className="font-extrabold text-2xl sm:text-[28px] lg:text-[30px] text-slate-900 tracking-tight leading-[1.2]">
            {stackBuilder.title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
            {stackBuilder.subtitle}
          </p>
        </div>

        {/* Center / Middle: Connected Flow Visual ("Your needs" -> "Growth" -> "Your HR stack") */}
        <div className="relative flex items-center justify-center py-2 px-4 select-none">
          {/* Subtle connecting dashed curved line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 border-t-2 border-dashed border-blue-200/90 pointer-events-none -z-0" />

          <div className="relative z-10 flex items-center gap-3 sm:gap-4">
            {/* Step 1: "Your needs" */}
            <div className="bg-white/95 rounded-2xl p-2.5 sm:p-3 shadow-[0_8px_20px_-6px_rgba(13,91,189,0.1)] border border-blue-100/80 flex flex-col items-center justify-center min-w-[76px] sm:min-w-[84px]">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <BarChartAscendingIcon className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-bold text-slate-700 mt-1.5 leading-none">
                Your needs
              </span>
            </div>

            {/* Step 2: "Recommended package: Growth" */}
            <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_28px_-6px_rgba(16,185,129,0.15)] border border-emerald-100/90 flex flex-col items-start gap-1 min-w-[140px] sm:min-w-[150px]">
              <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                Recommended package
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <BarChartAscendingIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                  Growth
                </span>
              </div>
            </div>

            {/* Step 3: "Your HR stack" */}
            <div className="bg-white/95 rounded-2xl p-2.5 sm:p-3 shadow-[0_8px_20px_-6px_rgba(13,91,189,0.1)] border border-blue-100/80 flex flex-col items-center justify-center min-w-[76px] sm:min-w-[84px]">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <LayersStackIcon className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-bold text-slate-700 mt-1.5 leading-none">
                Your HR stack
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: "Try HR Stack Builder →" Button */}
        <div className="shrink-0 flex items-center">
          <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-semibold group/btn">
            <Link href={stackBuilder.ctaPrimary.href} className="inline-flex items-center gap-2">
              <SlidersAdjustIcon className="w-4 h-4 text-white/90" />
              <span>{stackBuilder.ctaPrimary.label}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-white/90 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StackBuilderBanner;
