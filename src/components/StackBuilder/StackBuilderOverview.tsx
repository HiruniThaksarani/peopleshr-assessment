"use client";

import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  LayersStackIcon,
  ArrowRightIcon,
  CubeIcon,
  BarChartAscendingIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { STACK_BUNDLES, BundleInfo } from "@/constants/stackBuilder";
import PackageOverviewCard from "./PackageOverviewCard";

interface StackBuilderOverviewProps {
  onStartBuilder: (preselectedBundle?: BundleInfo) => void;
}

export function StackBuilderOverview({ onStartBuilder }: StackBuilderOverviewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-slate-200/80">
        <div className="max-w-3xl">
          <Badge
            variant="primary"
            icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
            className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
          >
            HR STACK BUILDER
          </Badge>

          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 tracking-tight leading-[1.14]">
            Build the Right HR Stack for Your Business
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            Explore our solution packages or use the HR Stack Builder to get a personalised recommendation based on your business needs.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
          <Button
            size="lg"
            onClick={() => onStartBuilder()}
            className="rounded-full shadow-[0_4px_18px_rgba(13,91,189,0.3)] hover:shadow-[0_8px_24px_rgba(13,91,189,0.45)] px-7 py-3 text-xs sm:text-sm font-bold group"
          >
            <span>Start HR Stack Builder</span>
            <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Button>
          <span className="text-[11.5px] text-slate-500 font-medium">
            Answer a few questions to find your best fit
          </span>
        </div>
      </div>

      {/* 3 Solution Packages Cards Grid matching homepage design */}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch pt-2">
        {STACK_BUNDLES.map((bundle) => (
          <PackageOverviewCard
            key={bundle.id}
            bundle={bundle}
            onSelect={() => onStartBuilder(bundle)}
          />
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-14 sm:mt-18 relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Floating Graphic Cards Illustration */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="relative w-28 h-24 shrink-0 flex items-center justify-center">
              {/* Back Card */}
              <div className="absolute -top-1 -left-1 w-20 h-16 rounded-xl bg-white/80 border border-slate-200/70 shadow-xs rotate-[-6deg] p-2 flex flex-col justify-between">
                <div className="w-4 h-4 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                  <SparklesIcon className="w-2.5 h-2.5" />
                </div>
                <div className="w-8 h-1.5 rounded-full bg-slate-200" />
              </div>
              {/* Middle Card */}
              <div className="absolute top-1 right-0 w-20 h-16 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs rotate-[8deg] p-2 flex flex-col justify-between">
                <div className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <BarChartAscendingIcon className="w-2.5 h-2.5" />
                </div>
                <div className="w-10 h-1.5 rounded-full bg-slate-200" />
              </div>
              {/* Front Card */}
              <div className="relative z-10 w-22 h-18 rounded-2xl bg-white border border-blue-100 shadow-md p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-primary flex items-center justify-center">
                    <CubeIcon className="w-3 h-3" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="space-y-1">
                  <div className="w-12 h-1.5 rounded-full bg-primary/40" />
                  <div className="w-8 h-1.5 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Not sure which package is right for you?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Use the HR Stack Builder to find the most relevant combination of HR capabilities for your business.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <Button
              size="lg"
              onClick={() => onStartBuilder()}
              className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group"
            >
              <span>Launch HR Stack Builder</span>
              <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackBuilderOverview;
